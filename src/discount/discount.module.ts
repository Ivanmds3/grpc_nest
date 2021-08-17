import { MiddlewareConsumer, Module, NestModule,  } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";
import { DiscoutClient } from "./discount.client";

@Module({
    imports: [
        ClientsModule.register([
            {
              name: 'DISCOUNT_PACKAGE',
              transport: Transport.GRPC,
              options: {
                package: 'discount',
                url: 'localhost:50051',
                protoPath: join(__dirname, 'discount.proto'),
              },
            },
          ]),
    ],
    providers: [DiscoutClient],
    exports: [DiscoutClient]
})
export class DiscountModule implements NestModule {
    configure(consumer: MiddlewareConsumer) { }
}