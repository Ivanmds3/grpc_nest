import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CheckoutMapper } from "./mappers/checkout.mapper";

@Module({
    providers: [CheckoutMapper]
})
export class CheckoutModule implements NestModule {
    configure(consumer: MiddlewareConsumer) { }
}