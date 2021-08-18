import { MiddlewareConsumer, Module, NestModule,  } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";
import { environment } from "src/environment";
import { DiscoutClient } from "./discount.client";

@Module({
    imports: [
        ClientsModule.register([
            {
              name: 'DISCOUNT_PACKAGE',
              transport: Transport.GRPC,
              options: {
                package: 'discount',
                url: environment.discoutServer,
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