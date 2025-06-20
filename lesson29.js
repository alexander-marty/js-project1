const userName = `Basil`;
console.log(userName || `Default UserName`);

const userName1 = `Basil`;
console.log(userName1 && `Default UserName`);

console.log(`==============================================`);

const userName2 = ``;
console.log(userName2 || `Default UserName`);

console.log(`==============================================`);

let age = 0;
console.log(age || 18);
console.log(age ?? 18);