const bmwPrice = 15000;
const fordPrice = 10000;
const budget = 12000;

let message;
if(budget > bmwPrice){
    message = `BMW`;
} else if (budget > fordPrice){
    message = `Ford`;
} else{
    message = `Bicycle`;
}


console.log(`I want to buy ${message}`)


10 > 0 ? console.log(`Больше 0`) : console.log(`Меньше нуля`)



const str = 22 > 5 ? (`Больше пяти`) : (`Меньше пяти`)

console.log(str)