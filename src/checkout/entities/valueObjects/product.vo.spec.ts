import { FakerValue } from "src/common/faker.value";
import { Product } from "./product.vo";

describe('Product', () => {

    it('Should calc total amount without discount', () => {
        const product = new Product(
            FakerValue.getNumber(),
            FakerValue.getNumber(),
            FakerValue.getNumber(),
            FakerValue.getNumber(),
            false
        );
        
        const totalAmountWithoutDiscount = (product.getQuantity * product.getUnitAmount)
        expect(totalAmountWithoutDiscount).toEqual(product.getTotalAmountWithoutDiscount);
    })

    it('Should calc total amount with discount', () => {
        const product = new Product(
            FakerValue.getNumber(),
            FakerValue.getNumber(),
            FakerValue.getNumber(),
            FakerValue.getNumber(),
            false
        );
        
        const totalAmountWithDiscount = ((product.getQuantity * product.getUnitAmount) - product.getDiscount)
        expect(totalAmountWithDiscount).toEqual(product.getTotalAmountWithDiscount);
    })

});