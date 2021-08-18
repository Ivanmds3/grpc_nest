import { ApiProperty } from "@nestjs/swagger";
import { ProductDto } from "./product.dto";

export class CheckoutDto {

    @ApiProperty({ type: [ProductDto] })
    products: ProductDto[];

    @ApiProperty()
    total_amount: number;

    @ApiProperty()
    total_amount_with_discount: number;

    @ApiProperty()
    total_discount: number;
}