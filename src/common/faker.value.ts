import { CheckoutCreateCommand, ProductItem } from "src/checkout/dtos/commands/checkout-create.command";
import { Checkout } from "src/checkout/entities/checkout.entity";
import { Product } from "src/checkout/entities/valueObjects/product.vo";
import { ProductData } from "src/checkout/repositories/data/product.data";

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

    static getCheckoutCreateCommand(): CheckoutCreateCommand {
        const command = new CheckoutCreateCommand();

        command.products = new Array<ProductItem>();
        const item1 = new ProductItem();
        item1.id = 1;
        item1.quantity = 1;

        command.products.push(item1);

        return command;
    }

    static getProductData(isGift: boolean = false): ProductData {
        const data = new ProductData();
        data.amount = FakerValue.getNumber();
        data.description = 'description',
        data.id = FakerValue.getNumber();
        data.is_gift = isGift;
        data.title = 'title';

        return data;
    }
}