import { Checkout } from "./checkout.entity";
import { Product } from "./valueObjects/product.vo";

describe('Checkout', () => {

    describe('getTotalAmount', () => {

        it("should return 0 when product list is null", () => {
            const checkout = new Checkout(null);
            expect(0).toEqual(checkout.getTotalAmount);
        });

        it("should return 0 when product list empty", () => {
            const checkout = new Checkout([]);
            expect(0).toEqual(checkout.getTotalAmount);
        });

        it("should return total amount when product list is not empty", () => {
            const product1 = new Product(1, 2, 10, 2, false);
            const product2 = new Product(1, 3, 15, 2, false);

            const checkout = new Checkout([product1, product2]);
            const total_amount = product1.getTotalAmountWithoutDiscount + product2.getTotalAmountWithoutDiscount;
            expect(total_amount).toEqual(checkout.getTotalAmount);
        });

        it("should return total amount when product list has one item", () => {
            const product = new Product(1, 2, 10, 2, false);
            const checkout = new Checkout([product]);
            expect(product.getTotalAmountWithoutDiscount).toEqual(checkout.getTotalAmount);
        });

    });


    describe('getTotalDiscount', () => {

        it("should return 0 when product list is null", () => {
            const checkout = new Checkout(null);
            expect(0).toEqual(checkout.getTotalDiscount);
        });

        it("should return 0 when product list empty", () => {
            const checkout = new Checkout([]);
            expect(0).toEqual(checkout.getTotalDiscount);
        });

        it("should return total amount when product list is not empty", () => {
            const product1 = new Product(1, 2, 10, 2, false);
            const product2 = new Product(1, 3, 15, 2, false);

            const checkout = new Checkout([product1, product2]);
            const total_amount = product1.getDiscount + product2.getDiscount;
            expect(total_amount).toEqual(checkout.getTotalDiscount);
        });

        it("should return total amount when product list has one item", () => {
            const product = new Product(1, 2, 10, 2, false);
            const checkout = new Checkout([product]);
            expect(product.getDiscount).toEqual(checkout.getTotalDiscount);
        });

    });


    describe('getTotalAmountWithDiscount', () => {

        it("should return 0 when product list is null", () => {
            const checkout = new Checkout(null);
            expect(0).toEqual(checkout.getTotalAmountWithDiscount);
        });

        it("should return 0 when product list empty", () => {
            const checkout = new Checkout([]);
            expect(0).toEqual(checkout.getTotalAmountWithDiscount);
        });

        it("should return total amount when product list is not empty", () => {
            const product1 = new Product(1, 2, 10, 2, false);
            const product2 = new Product(1, 3, 15, 2, false);

            const checkout = new Checkout([product1, product2]);
            const total_amount = product1.getTotalAmountWithDiscount + product2.getTotalAmountWithDiscount;
            expect(total_amount).toEqual(checkout.getTotalAmountWithDiscount);
        });

        it("should return total amount when product list has one item", () => {
            const product = new Product(1, 2, 10, 2, false);
            const checkout = new Checkout([product]);
            expect(product.getTotalAmountWithDiscount).toEqual(checkout.getTotalAmountWithDiscount);
        });

    });


});