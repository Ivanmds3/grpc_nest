import { Observable } from "rxjs";

export interface Discount {
    getDiscount(request: GetDiscountRequest): Observable<GetDiscountResponse>;
}

export interface GetDiscountRequest {
    productID: number;
}

export interface GetDiscountResponse {
    percentage: number;
}