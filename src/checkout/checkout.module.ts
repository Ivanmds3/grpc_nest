import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DiscountModule } from "src/discount/discount.module";
import { CheckoutController } from "./checkout.controller";
import { CheckoutMapper } from "./mappers/checkout.mapper";
import { ProductRepository } from "./repositories/product.repository";
import { CheckoutService } from "./services/checkout.service";
import { PromotionDayService } from "./services/promotion-day.service";

@Module({
    imports: [DiscountModule],
    providers: [CheckoutMapper, CheckoutService, ProductRepository, PromotionDayService],
    controllers: [CheckoutController]
})
export class CheckoutModule implements NestModule {
    configure(consumer: MiddlewareConsumer) { }
}