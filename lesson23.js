const role = 'manager';

if (role === 'manager') {
    console.log("Manager")
} else if (role === 'seller') {
    console.log("Seller")
} else if (role === 'CEO') {
    console.log("CEO")
}

switch (role) {
    case 'manager':
        console.log("manager");
        break;
    case 'admin':
        console.log("admin");
        break;
    case 'CEO':
        console.log("CEO");
        break;
    default:
        console.log("Udefined")
}

switch (role) {
    case 'manager':
    case 'admin':
        console.log("not a supervisor");
        break;
    case 'CEO':
        console.log("supervisor");
}

switch (role) {
    case 'manager':
        console.log("manager!!!");
    case 'admin':
        console.log("not a supervisor!!!");
        break;
    case 'CEO':
        console.log("CEO!!!");
        break;
    default:
        console.log("Udefined!!!");
}

console.log("---------------------------------------------");

const number = -12;

switch (true) {
    case number > 0:
        console.log("+");
        break;
    case number < 0:
        console.log("-");
        break;
    default:
        console.log("0");
}