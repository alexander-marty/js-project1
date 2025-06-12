const carPrice = 10000;
const carPrice2 = 15000;

const budget = 12000;

let message;

if (budget > carPrice) {
    message = "BMW";
} else if (budget > carPrice2) {
    message = "Ford Focus";
} else {
    message = "Bicycle";
}

console.log(`I want to buy ${message}`);


console.log(`=====================================`)



10 > 0 ? console.log(`Больше 0`) : console.log(`Не больше 0`);

let str = -10 > 0 ? `Больше 0` : `Не больше 0`;

console.log(str);


console.log(`=====================================`);


budget < carPrice ? message = `BMW` : message = `Ford Focus`;

console.log(message);

console.log(`I want to buy ${budget < carPrice ? message = "BMW" : message = "Bicycle"}`);