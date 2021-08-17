import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DiscountModule } from "src/discount/discount.module";
import { CheckoutController } from "./checkout.controller";
import { CheckoutMapper } from "./mappers/checkout.mapper";

@Module({
    imports:[DiscountModule],
    providers: [CheckoutMapper],
    controllers: [CheckoutController]
})
export class CheckoutModule implements NestModule {
    configure(consumer: MiddlewareConsumer) { }
}