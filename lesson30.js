const balance = true; //1000
const bonusBalance = true; //100
const isBanned = true;
const isExist = true;
const isSelling = true;

const canBuy = (balance || bonusBalance)
    && isBanned
    && isExist
    && isSelling;

console.log(canBuy);

console.log(`-----------------------------------------`)

const balance1 = 1000; //1000
const bonusBalance1 = 100; //100
const isBanned1 = true;
const isExist1 = true;
const isSelling1 = true;

const canBuy1 = (balance1 >= 1000 || bonusBalance1 >= 100)
    && isBanned1 
    && isExist1
    && isSelling1;

    console.log(canBuy1);