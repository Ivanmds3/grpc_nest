import { FakerValue } from "src/common/faker.value";

describe('Product', () => {

    it('Should calc total amount without discount', () => {
        const product = FakerValue.getProduct();
        const totalAmountWithoutDiscount = (product.getQuantity * product.getUnitAmount)
        expect(totalAmountWithoutDiscount).toEqual(product.getTotalAmountWithoutDiscount);
    })

    it('Should calc total amount with discount', () => {
        const product = FakerValue.getProduct();
        const totalAmountWithDiscount = ((product.getQuantity * product.getUnitAmount) - product.getDiscount)
        expect(totalAmountWithDiscount).toEqual(product.getTotalAmountWithDiscount);
    })

});