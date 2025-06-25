
function toPower(num, power) {
    power = power ?? 2;
    const res = num ** power;
    return res;
}

function toPower(num, power = 2) {
    const res = num ** power;
    return res;
}

console.log(toPower(2));

const toPowerArrow = (num1, power1) => num1 ** power1;
console.log(toPowerArrow(2, 30));