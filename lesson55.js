let balance = 100;

const operations = [1000, -1700, 300, -500, 10000];

function calculateFinalBalance(operations, startingBalance){
    let balance = startingBalance;
for(let i = 0; i < operations.length; i++){
     balance += operations[i];
};
return balance;
};

function indicateNegativeBalance(operations, startingBalance){
        let balance1 = startingBalance;
for(let i = 0; i < operations.length; i++){
balance1 += operations[i];
if (balance1 < 0){
    return false;
};
};
return true;
};

function positiveFiltration(operations) {
    const positive = [];
    const negative = [];

    let positiveBalance = 0;
    let negativeBalance = 0;

    for (let a = 0; a < operations.length; a++) {
        if (operations[a] > 0) {
            positive.push(operations[a]);
        } else if (operations[a] < 0) {
            negative.push(operations[a]);
        } else {
            console.log(`${operations[a]} is not a valid number`);
        }
    }

    for (let b = 0; b < positive.length; b++) {
        positiveBalance += positive[b];
    }

    for (let c = 0; c < negative.length; c++) {
        negativeBalance += negative[c];
    }

    const positiveAvg = positive.length > 0 ? positiveBalance / positive.length : 0;
    const negativeAvg = negative.length > 0 ? negativeBalance / negative.length : 0;

    return {
        positiveBalance: positiveAvg,
        negativeBalance: negativeAvg
    };
}


calculateFinalBalance(operations, balance);
indicateNegativeBalance(operations, balance);
const result = positiveFiltration (operations);

console.log(calculateFinalBalance(operations, balance));
console.log(indicateNegativeBalance(operations, balance));

console.log(result.positiveBalance);
console.log(result.negativeBalance);
