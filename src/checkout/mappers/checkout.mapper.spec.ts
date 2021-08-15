import { FakerValue } from "src/common/faker.value";
import { CheckoutMapper } from "./checkout.mapper";

describe('CheckoutMapper', () => {

    let mapper: CheckoutMapper;

    beforeEach(() => {
        mapper = new CheckoutMapper();
    });

    describe('parseProductToDto', () => {
        it('Should return null when product passed is null', () => {
            const productDto = mapper.parseProductToDto(null);
            expect(null).toEqual(productDto);
        });

        it('Should return productDto from product', () => {
            const product = FakerValue.getProduct();
            const productDto = mapper.parseProductToDto(product);
            expect(product).toMatchObject(productDto);
        });

    });


    describe('parseProductsToDto', () => {
        it('Should return null when products passed is null', () => {
            const productDto = mapper.parseProductsToDto(null);
            expect(null).toEqual(productDto);
        });

        it('Should return productsDto from products', () => {
            const products = FakerValue.getProducts();
            const productsDto = mapper.parseProductsToDto(products);
            expect(products).toMatchObject(productsDto);
        });

    });

    describe('parseCheckoutToDto', () => {
        it('Should return null when checkout passed is null', () => {
            const checkoutDto = mapper.parseCheckoutToDto(null);
            expect(null).toEqual(checkoutDto);
        });

        it('Should return checkoutDto from checkout', () => {
            const checkout = FakerValue.getCheckout();
            const checkoutDto = mapper.parseCheckoutToDto(checkout);

            expect(checkout.getTotalAmount).toEqual(checkoutDto.totalAmount);
            expect(checkout.getTotalAmountWithDiscount).toEqual(checkoutDto.totalAmountWithDiscount);
            expect(checkout.getTotalDiscount).toEqual(checkoutDto.totalDiscount);
            expect(checkout.getProducts).toMatchObject(checkoutDto.products);
        });

    });
});