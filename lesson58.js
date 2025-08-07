function power(pow){
    return function(num){
        return num**pow;
    }
}

const powerOfTwo = power(2);
const powerOfThree = power(3);

console.log(powerOfTwo(10));
console.log(powerOfThree(10));

power(5)(4)
console.log(power(5)(4));