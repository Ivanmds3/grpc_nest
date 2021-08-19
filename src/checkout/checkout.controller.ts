import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { CheckoutDto } from "./dtos/checkout.dto";
import { CheckoutCreateCommand } from "./dtos/commands/checkout-create.command";
import { CheckoutMapper } from "./mappers/checkout.mapper";
import { CheckoutService } from "./services/checkout.service";

@ApiTags('checkouts')
@Controller('checkouts')
export class CheckoutController {

    constructor(
        private service: CheckoutService,
        private mapper: CheckoutMapper) { }

    @Post()
    @ApiResponse({ status: 201, description: 'created', type: CheckoutDto })
    async getDiscout(@Body() command: CheckoutCreateCommand): Promise<CheckoutDto> {
        const checkoutCalc = await this.service.calc(command);
        return this.mapper.parseCheckoutToDto(checkoutCalc);
    }
}