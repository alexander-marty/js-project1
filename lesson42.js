const roles = [`user`, `admin`, `manager`, `superAdmin`];

let result1 = roles.slice(2);

let result2 = roles.slice(2, 3);

let result3 = roles.slice(0, 2);

let result4 = roles.slice(-1);

let result5 = roles[roles.length -1];

let result6 = roles.slice(-1)[0];

let result7 = roles.slice(1, -1);


console.log(roles);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);

console.log(`------------------------------------`);

//let result8 = roles.splice(2); 
/* Модифицирует исходный массив оставляя в нем элементы начиная со 2-го */

// let result9 = roles.splice(2, 2);  
/* Берет эелементы начиная со второго в количестве 2-ух */

//let result10 = roles.splice(-1);
/* модифицирует исходный массив отрезая от него последний элемент с конца */

//console.log(result8);
//console.log(result9);
//console.log(result10);
console.log(roles);

console.log(`------------------------------------`);

let result12 = roles.reverse();
/* Модифицирует исходный массив разворачивая его */

console.log(roles);

console.log(`------------------------------------`);

const newRoles = [`sysAdmin`, `developer`];

const result13 = roles.concat(newRoles);

console.log(result13);
console.log(roles);

