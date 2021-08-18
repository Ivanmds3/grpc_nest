import { Test, TestingModule } from "@nestjs/testing";
import { FakerValue } from "src/common/faker.value";
import { DiscoutClient } from "src/discount/discount.client";
import { ProductRepository } from "../repositories/product.repository";
import { CheckoutService } from "./checkout.service";

describe('CheckoutService', () => {

    let service: CheckoutService;
    let faker: FakerValue;

    const mockDiscountClient = {
        getDiscount: jest.fn()
    };

    const mockProductRepository = {
        get: jest.fn(),
        getGifts: jest.fn()
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CheckoutService,
                {
                    provide: DiscoutClient,
                    useValue: mockDiscountClient
                },
                {
                    provide: ProductRepository,
                    useValue: mockProductRepository
                }
            ]
        }).compile();

        service = module.get<CheckoutService>(CheckoutService);
        faker = new FakerValue();
    });

    afterEach(() => {
        mockDiscountClient.getDiscount.mockClear();
    });
});