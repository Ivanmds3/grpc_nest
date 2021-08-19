require('dotenv').config({ path: '.env' });

export const environment = {

    blackFriday: process.env.DATE_BLACK_FRIDAY,
    discoutServer: process.env.DISCOUNT_SERVER
}