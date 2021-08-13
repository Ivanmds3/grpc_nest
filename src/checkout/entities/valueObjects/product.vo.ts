export class Product {
    constructor(
        private id: number,
        private quantity: number,
        private unitAmount: number,
        private discount: number,
        private isGift: boolean
    ) { }
    
    get getId(): number {
         return this.id;
    }

    get getQuantity(): number {
        return this.quantity;
    }

    get getUnitAmount(): number {
        return this.unitAmount;
    }

    get getDiscount(): number {
        return this.discount;
    }

    get getIsGift(): boolean {
        return this.isGift;
    }

    get getTotalAmountWithoutDiscount(): number {
        return (this.quantity * this.unitAmount);
    }

    get getTotalAmountWithDiscount(): number {
        return ((this.quantity * this.unitAmount) - this.discount);
    }
}