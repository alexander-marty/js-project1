const role = `manager`;

if (role === `manager`) {
    console.log(`This is manager`);
} else if (role === `admin`) {
    console.log(`This is admin`);
} else if (role === `CEO`) {
    console.log(`This is CEO`);
} else {
    console.log(`I don't know you`);
}


switch (role) {
    case `manager`:
        console.log(`This is manager`);
        break;
    case `admin`:
        console.log(`This is admin`);
        break;
    case `CEO`:
        console.log(`This is CEO`);
        break;
    default:
        console.log(`I don't know you`);
}

switch (role) {
    case `manager`:
    case `admin`:
        console.log(`Не руководитель`);
        break;
    case `CEO`:
        console.log(`Руководитель`);
        break;
    default:
        console.log(`I don't know you`);
}

const num = 1;

switch (true) {
    case num > 0:
        console.log(`Положительный`);
        break;
    case num < 0:
        console.log(`Отрицательный`);
        break;
    default:
        console.log(`Равен нулю`);
}