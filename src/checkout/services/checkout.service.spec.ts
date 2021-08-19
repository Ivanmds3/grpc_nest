import { Test, TestingModule } from "@nestjs/testing";
import { FakerValue } from "src/common/faker.value";
import { DiscoutClient } from "src/discount/discount.client";
import { DiscoutDto } from "src/discount/dtos/discount.dto";
import { ProductRepository } from "../repositories/product.repository";
import { CheckoutService } from "./checkout.service";
import { PromotionDayService } from "./promotion-day.service";

describe('CheckoutService', () => {

    let service: CheckoutService;

    const mockDiscountClient = {
        getDiscount: jest.fn()
    };

    const mockProductRepository = {
        get: jest.fn(),
        getGifts: jest.fn()
    };

    const mockPromotionDayService = {
        isBlackFriday: jest.fn()
    }

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
                },
                {
                    provide: PromotionDayService,
                    useValue: mockPromotionDayService
                }
            ]
        }).compile();

        service = module.get<CheckoutService>(CheckoutService);
    });

    afterEach(() => {
        mockDiscountClient.getDiscount.mockClear();
        mockProductRepository.get.mockClear();
        mockProductRepository.getGifts.mockClear();
    });

    describe('calc', () => {

        it('should be call dicsountClient.getDiscount to get the discount parcentage', async () => {
            const command = FakerValue.getCheckoutCreateCommand();
            mockDiscountClient.getDiscount.mockReturnValue(new DiscoutDto(0));
            mockProductRepository.get.mockReturnValue(FakerValue.getProductData());
            await service.calc(command);
            expect(mockDiscountClient.getDiscount).toHaveBeenCalledTimes(1);
        });

        it('should be call productRepository.get to get the product', async () => {
            const command = FakerValue.getCheckoutCreateCommand();
            mockDiscountClient.getDiscount.mockReturnValue(new DiscoutDto(0));
            mockProductRepository.get.mockReturnValue(FakerValue.getProductData());
            await service.calc(command);
            expect(mockProductRepository.get).toHaveBeenCalledTimes(1);
        });

        it('should be call mockProductRepository.getGifts in blackfriday', async () => {
            const command = FakerValue.getCheckoutCreateCommand();
            mockDiscountClient.getDiscount.mockReturnValue(new DiscoutDto(0));
            mockProductRepository.get.mockReturnValue(FakerValue.getProductData());
            mockPromotionDayService.isBlackFriday.mockReturnValue(true);
            await service.calc(command);

            expect(mockProductRepository.getGifts).toHaveBeenCalledTimes(1);
        });

        it('should not be call mockProductRepository.getGifts in blackfriday', async () => {
            const command = FakerValue.getCheckoutCreateCommand();
            mockDiscountClient.getDiscount.mockReturnValue(new DiscoutDto(0));
            mockProductRepository.get.mockReturnValue(FakerValue.getProductData());
            mockPromotionDayService.isBlackFriday.mockReturnValue(false);
            await service.calc(command);

            expect(mockProductRepository.getGifts).toHaveBeenCalledTimes(0);
        });


        it('should be return a gift in blackFriday', async () => {
            const command = FakerValue.getCheckoutCreateCommand();
            mockDiscountClient.getDiscount.mockReturnValue(new DiscoutDto(0));
            mockProductRepository.get.mockReturnValue(FakerValue.getProductData());

            const productGift = FakerValue.getProductData(true);
            mockProductRepository.getGifts.mockReturnValue([productGift]);

            mockPromotionDayService.isBlackFriday.mockReturnValue(true);
            const checkout = await service.calc(command);
            const gift = checkout.getProducts.filter(p => p.getIsGift == true);
            expect(gift).not.toBeNull();
        });

        it('should not be return a gift when not blackFriday', async () => {
             const command = FakerValue.getCheckoutCreateCommand();
            mockDiscountClient.getDiscount.mockReturnValue(new DiscoutDto(0));
            mockProductRepository.get.mockReturnValue(FakerValue.getProductData());

            const productGift = FakerValue.getProductData(true);
            mockProductRepository.getGifts.mockReturnValue([productGift]);
            
            mockPromotionDayService.isBlackFriday.mockReturnValue(false);
            const checkout = await service.calc(command);
            const gift = checkout.getProducts.filter(p => p.getIsGift == true);
            expect(gift).not.toBeNull();
        });

    });
});