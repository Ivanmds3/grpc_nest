import { ApiProperty } from "@nestjs/swagger";

export class ProductItem {
    @ApiProperty()
    id: number;

    @ApiProperty()
    quantity: number;
}

export class CheckoutCreateCommand {
    @ApiProperty({ type: [ProductItem] })
    products: ProductItem[];
}