import { ProductDto } from "./product.dto";

export class CheckoutDto {
    products: ProductDto[];
    totalAmount: number;
    totalAmountWithDiscount: number;
    totalDiscount: number;
}