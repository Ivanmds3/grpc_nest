import { Injectable } from "@nestjs/common";
import { DiscoutClient } from "src/discount/discount.client";
import { CheckoutCreateCommand, ProductItem } from "../dtos/commands/checkout-create.command";
import { Checkout } from "../entities/checkout.entity";
import { Product } from "../entities/valueObjects/product.vo";
import { ProductRepository } from "../repositories/product.repository";

@Injectable()
export class CheckoutService {
    constructor(
        private discountClient: DiscoutClient,
        private productRepository: ProductRepository) {
    }

    async calc(command: CheckoutCreateCommand) : Promise<Checkout> {

        const products = new Array<Product>();

        await Promise.all(command.products.map(async (item) => {
            const product = await this.loadProduct(item);
            products.push(product);
        }));

        return new Checkout(products);
    }

    private async loadProduct(item: ProductItem) : Promise<Product> {
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
}