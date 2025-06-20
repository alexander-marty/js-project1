function fromMilesToKM(miles) {
    const km = miles / 0.62137;
    return km;
}

function logMyName() {
    console.log(`This is my name`);
}

logMyName();

const name = logMyName();

function MyName(firstName, lastName) {
    console.log(`My name is ${firstName} ${lastName}`);
}

MyName(`Alex`, `Marty`);


 console.log(`----------------------------------------`);

 function depositSum(depositInUSD, month, rate) {
    const sum = depositInUSD * (1 + rate /12) ** month
    return sum;
 }

const example1 = depositSum(1000, 24, 0.12)
console.log(example1)


const example2 = depositSum(60000, 24, 0.12)
console.log(example2)