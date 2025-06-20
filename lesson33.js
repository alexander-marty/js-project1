function powerOfTwo (num){
    return num * num;
}
console.log(powerOfTwo(5));

const poft = (num) => num * num;
console.log(poft(7));

const poft1 = num => num * num;
console.log(poft1(10));

const poft2 = num => {
    console.log(num)
   return num * num;
}

console.log(poft2(15));

const poft3 = (num, num1) => {
    console.log(num, num1)
   return (num * num) + (num1 * num1);
}

console.log(poft3(15, 25));
