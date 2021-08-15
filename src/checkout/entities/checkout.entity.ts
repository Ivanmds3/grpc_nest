import { Product } from "./valueObjects/product.vo";

export class Checkout {

    constructor(private products: Product[]) { }

    get getProducts(): Product[] {
        return this.products;
    }

    get getTotalAmount(): number {

        if (!this.products) { return 0; }
        if (this.products.length == 0) { return 0; }

        return this.products
            .map(p => p.getTotalAmountWithoutDiscount)
            .reduce(this.sum);
    }

    get getTotalDiscount(): number {
        if (!this.products) { return 0; }
        if (this.products.length == 0) { return 0; }

        return this.products
            .map(p => p.getDiscount)
            .reduce(this.sum);
    }

    get getTotalAmountWithDiscount(): number {
        if (!this.products) { return 0; }
        if (this.products.length == 0) { return 0; }

        return this.products
            .map(p => p.getTotalAmountWithDiscount)
            .reduce(this.sum);
    }

    private sum = (prev: number, next: number): number => prev + next;
}