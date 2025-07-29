const userData = [`Antony`, 18, `Moscow`];

function getData(){
    return [`Antony`, 18, `Moscow`];
}

const userName = getData()[0];
const userAge = getData()[1];
const userLocation = getData()[2];


console.log(userName, userAge, userLocation)

console.log(`--------------------------------------`)

const [userName1, userAge1, userLocation1] = getData();
const [userName2, userAge2, userLocation2] = userData;

console.log(userName1, userAge1, userLocation1);
console.log(userName2, userAge2, userLocation2);
