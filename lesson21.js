const budget = 12000;
const bankPercent = 0.07;
const timeLimit = 24

const target = 13500;
const result = budget * ((1 + bankPercent /12) **  timeLimit)


if (result > target) {
    console.log("You can buy a new house")
} else {
    console.log("Not enough money")
}