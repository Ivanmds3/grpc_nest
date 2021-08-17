import { Controller, Get } from "@nestjs/common";
import { DiscoutClient } from "src/discount/discount.client";

@Controller('checkouts')
export class CheckoutController {

    constructor(private client: DiscoutClient) { }

    @Get()
    async getDiscout() {
        const discount = await this.client.getDiscount(2);
        return discount;
    }
}