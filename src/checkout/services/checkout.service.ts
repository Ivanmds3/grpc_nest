import { Injectable } from "@nestjs/common";
import { DiscoutClient } from "src/discount/discount.client";
import { CheckoutCreateCommand, ProductItem } from "../dtos/commands/checkout-create.command";
import { Checkout } from "../entities/checkout.entity";
import { Product } from "../entities/valueObjects/product.vo";
import { ProductRepository } from "../repositories/product.repository";
import { PromotionDayService } from "./promotion-day.service";

@Injectable()
export class CheckoutService {
    constructor(
        private discountClient: DiscoutClient,
        private productRepository: ProductRepository,
        private promotionDayService: PromotionDayService) {
    }

    async calc(command: CheckoutCreateCommand): Promise<Checkout> {

        const products = new Array<Product>();
        const gift = this.getGift();

        if (gift) {
            products.push(gift);
        }

        await Promise.all(command.products.map(async (item) => {
            const product = await this.loadProduct(item);
            products.push(product);
        }));

        return new Checkout(products);
    }

    private async loadProduct(item: ProductItem): Promise<Product> {
        const discount = await this.discountClient.getDiscount(item.id);
        const product = this.productRepository.get(item.id);

        return new Product(
            product.id,
            item.quantity,
            product.amount,
            discount.percentage,
            product.is_gift
        );
    }

    private getGift(): Product {
        if (this.promotionDayService.isBlackFriday()) {
            const gifts = this.productRepository.getGifts();
            if (!gifts || gifts.length == 0) {
                return null;
            }

            const gift = gifts[0];

            return new Product(
                gift.id,
                1,
                gift.amount,
                1,
                gift.is_gift
            );
        }
        return null;
    }
}