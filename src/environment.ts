require('dotenv').config({ path: '.env' });

export const environment = {

    isBlackFriday: () => {
        const dateToBlackFriday = process.env.DATE_BACK_FRIDAY;
        const now = new Date(Date.now());
        const month = now.getMonth() + 1 >= 10 ? (now.getMonth() + 1) : `0${now.getMonth() + 1}`;
        const blackFriday = `${now.getFullYear()}-${month}-${now.getDate()}`
        return dateToBlackFriday == blackFriday;
    },
    discoutServer: process.env.DISCOUNT_SERVER
}