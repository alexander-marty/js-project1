
const result1 = prompt("5 + 15 | 5 - 15");

switch (true) {
    case Number(result1) === 22:
        console.log("You're not a robot");
        break;
    case Number(result1) === -8:
        console.log("You're not a robot");
        break;
    case result1 === "I am not a robot":
        console.log("You're not a robot");
        break;
    default:
        console.log("You're a robot")
}

console.log("==========================================================")

if (result1 === "I am not a robot") {
    console.log("You're not a robot");
} else {
    const result1Number = Number(result1);
    switch (result1Number) {
        case -8:
        case 22:
            console.log("You're not a robot")
            break;
        default:
            console.log("You're a robot")
    }
}