/*
Вася положил 12 000 на вклад 7% годовых с капитализацией 1 раз в месяц.
Вывести в консоль, сможет ли  он купить дом за 13 500 через 2 года после снятия вклада. И остаток после покупки

Итог = сумма * (1 + Ставка в месяц не в %) ^ ставка в меяцаз
*/

const budget = 12000;
const neededSum = 13500;
const depositTerm = 24;

const result = budget * (1 + 0.07 / 12) ** 24;
const remainingFunds = result - neededSum;
const insufficientFunds = neededSum - result;

if (result >= neededSum){
    console.log(`Basil can buy a house for ${neededSum} and still have funds ${remainingFunds} left over`)
}else{
    console.log(`Insufficient funds ${insufficientFunds}`)
}

