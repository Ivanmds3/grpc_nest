import { ApiProperty } from "@nestjs/swagger";

export class ProductDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    unit_amount: number;

    @ApiProperty()
    total_amount: number;

    @ApiProperty()
    discount: number;

    @ApiProperty()
    is_gift: boolean;
}