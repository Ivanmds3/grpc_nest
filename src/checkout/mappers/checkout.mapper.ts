import { Injectable } from "@nestjs/common";
import { CheckoutDto } from "../dtos/checkout.dto";
import { ProductDto } from "../dtos/product.dto";
import { Checkout } from "../entities/checkout.entity";
import { Product } from "../entities/valueObjects/product.vo";

@Injectable()
export class CheckoutMapper {

    parseCheckoutToDto(checkout: Checkout): CheckoutDto {
        if(!checkout) return null;

        const checkoutDto = new CheckoutDto();
        checkoutDto.products = this.parseProductsToDto(checkout.getProducts);
        checkoutDto.total_amount = checkout.getTotalAmount;
        checkoutDto.total_amount_with_discount = checkout.getTotalAmountWithDiscount;
        checkoutDto.total_discount = checkout.getTotalDiscount;

        return checkoutDto;
    }

    parseProductsToDto(products : Product[]): ProductDto[] {
        if(!products) return null;


        const productsDto = new Array<ProductDto>();
        products.forEach(product => { 
            productsDto.push(this.parseProductToDto(product));
        });

        return productsDto;
    }

    parseProductToDto(product : Product): ProductDto {
        if(!product) return null;

        const productDto = new ProductDto();
        productDto.id = product.getId;
        productDto.discount = product.getDiscount;
        productDto.quantity = product.getQuantity;
        productDto.unit_amount = product.getUnitAmount;
        productDto.is_gift = product.getIsGift;
        productDto.total_amount = product.getTotalAmountWithDiscount;

        return productDto;
    }
} 