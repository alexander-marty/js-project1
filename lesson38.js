

function buyingAfford (age, job, budget){
    const macBookPrice = 2000;

function creditMoney ( age, job) {
    let credit;
    if (age >= 24 && typeof job === "string"){
        credit = 500;
    } else if (age >= 24 && typeof job !== "string" ){
        credit = 100;
    } else {
        credit = 0;
    }
     return credit
}

const canAfford = (budget + creditMoney(age, job)) >= macBookPrice;
return canAfford;
}
console.log(buyingAfford(24, "office", 100))

//--------------------------------------------------------

function buyingAfford (age, job, budget){
    const macBookPrice = 2000;

 const myCrediMoney = function creditMoney ( age, job) {
    let credit;
    if (age >= 24 && typeof job === "string"){
        credit = 500;
    } else if (age >= 24 && typeof job !== "string" ){
        credit = 100;
    } else {
        credit = 0;
    }
     return credit
}

const canAfford = (budget + myCrediMoney(age, job)) >= macBookPrice;
return canAfford;
}
console.log(buyingAfford(24, "office", 10000))