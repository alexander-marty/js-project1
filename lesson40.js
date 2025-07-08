const users = [`Ann`, `Victoria`, `Kate`];
console.log(users);

users[2] = `Cristian`;
console.log(users);

users[4] = `Nick`;
console.log(users);

users.push(`Jacob`);
console.log(users);

console.log(`-------------------------------`);

const usersLength = users.push(`Jack`);
console.log(usersLength);

console.log(`-------------------------------`);

users.unshift(`Jack`);
console.log(users);

console.log(`--------------------------------`);

users.pop();
console.log(users);

console.log(`---------------------------------`);

const e1 = users.pop();
console.log(e1);
console.log(users);

console.log(`----------------------------------`);

const e2 = users.shift();
console.log(e2);
console.log(users);

console.log(`-------------------------------------`);

