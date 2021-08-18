import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DiscountModule } from "src/discount/discount.module";
import { CheckoutController } from "./checkout.controller";
import { CheckoutMapper } from "./mappers/checkout.mapper";
import { ProductRepository } from "./repositories/product.repository";
import { CheckoutService } from "./services/checkout.service";

@Module({
    imports: [DiscountModule],
    providers: [CheckoutMapper, CheckoutService, ProductRepository],
    controllers: [CheckoutController]
})
export class CheckoutModule implements NestModule {
    configure(consumer: MiddlewareConsumer) { }
}