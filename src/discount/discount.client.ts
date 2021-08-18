import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Discount, GetDiscountResponse } from "./discount.interfaces";
import { DiscoutDto } from "./dtos/discount.dto";

@Injectable()
export class DiscoutClient implements OnModuleInit {

    private service: Discount;

    constructor(@Inject('DISCOUNT_PACKAGE') private client: ClientGrpc) {

    }

    onModuleInit() {
        this.service = this.client.getService<Discount>('Discount');
    }

    async getDiscount(productId: number): Promise<DiscoutDto> {
        const response = await this.gitDiscountGrpc(productId);
        if (!response.percentage) {
            response.percentage = 0;
        }
        return new DiscoutDto(response.percentage);
    }

    private gitDiscountGrpc(productId: number): Promise<GetDiscountResponse> {
        return new Promise<GetDiscountResponse>((resolver, reject) => {
            try {
                const request = { productID: productId };
                this.service.getDiscount(request)
                    .subscribe(event => {
                        resolver(event);
                    });

            } catch (err) {
                console.error(err);
                return resolver({ percentage: 0 });
            }
        });
    }
}