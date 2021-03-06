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
            expect(product.getDiscount).toEqual(productDto.discount);
            expect(product.getId).toEqual(productDto.id);
            expect(product.getIsGift).toEqual(productDto.is_gift);
            expect(product.getQuantity).toEqual(productDto.quantity);
            expect(product.getTotalAmountWithDiscount).toEqual(productDto.total_amount);
            expect(product.getUnitAmount).toEqual(productDto.unit_amount);
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
            expect(products.length).toEqual(productsDto.length);
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

            expect(checkout.getTotalAmount).toEqual(checkoutDto.total_amount);
            expect(checkout.getTotalAmountWithDiscount).toEqual(checkoutDto.total_amount_with_discount);
            expect(checkout.getTotalDiscount).toEqual(checkoutDto.total_discount);
            expect(checkout.getProducts.length).toEqual(checkoutDto.products.length);
        });

    });
});