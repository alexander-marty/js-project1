const role1 = `admin`;
const role2 = `user`;
const role3 = `superAdmin`;

const roles = [`admin`, `user`, `superAdmin`];
const userInfo = [`Ann`, 25];
console.log(roles);
console.log(roles[1]);


console.log(roles.length - 1);
console.log(roles[roles.length - 1]);
console.log(roles.at(0));
console.log(roles.at(- 1))


console.log(`====================================`);

const userAge = [2025 - 1980, 20 - `6`, 10 > 0 ? 5 : 0];
console.log(userAge);

console.log(`====================================`);

const userNames = new Array(`Basil`, `John`, `Kate`)
console.log(userNames);

console.log(`====================================`);

function square(e1){
    return e1 * e1;
}
console.log(square(5))

console.log(`====================================`);