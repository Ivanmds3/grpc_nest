import { Injectable } from "@nestjs/common";
import { environment } from "src/environment";

@Injectable()
export class PromotionDayService {

    isBlackFriday(): boolean  {
        const dateToBlackFriday = environment.blackFriday;
        const now = new Date(Date.now());
        const month = now.getMonth() + 1 >= 10 ? (now.getMonth() + 1) : `0${now.getMonth() + 1}`;
        const blackFriday = `${now.getFullYear()}-${month}-${now.getDate()}`
        return dateToBlackFriday == blackFriday;
    }
}