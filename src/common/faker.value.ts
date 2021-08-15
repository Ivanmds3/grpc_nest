import { Checkout } from "src/checkout/entities/checkout.entity";
import { Product } from "src/checkout/entities/valueObjects/product.vo";

export class FakerValue {
    static getNumber = (max: number = 999999999): number => Math.floor(Math.random() * max);
    static getBoolean = (): boolean => FakerValue.getNumber(10) % 2 == 0;

    static getCheckout(): Checkout {
        const products = FakerValue.getProducts();
        return new Checkout(products);
    }

    static getProduct(): Product {
        return new Product(
            FakerValue.getNumber(),
            FakerValue.getNumber(),
            FakerValue.getNumber(),
            FakerValue.getNumber(),
            FakerValue.getBoolean()
        );   
    }

    static getProducts(): Product[] {
        const totalItens = FakerValue.getNumber(10);
        const products = new Array<Product>();

        for(let i = 0; i <= totalItens; i++) {
            products.push(FakerValue.getProduct());
        }
        return products;
    }
}