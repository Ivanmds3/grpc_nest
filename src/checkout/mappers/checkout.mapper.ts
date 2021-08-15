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
        checkoutDto.totalAmount = checkout.getTotalAmount;
        checkoutDto.totalAmountWithDiscount = checkout.getTotalAmountWithDiscount;
        checkoutDto.totalDiscount = checkout.getTotalDiscount;

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
        productDto.unitAmount = product.getUnitAmount;
        productDto.isGift = product.getIsGift;

        return productDto;
    }
} 