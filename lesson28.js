console.log("Basil" || "Oleg");
console.log(false || "Oleg");
console.log("Basil" || false);
console.log(false || false);

console.log("========================================");

console.log("Basil" && "Oleg");
console.log(false && "Oleg");
console.log("Basil" && false);
console.log(false && false);

console.log("========================================");

let a;
const userName = a || `Peter`;
console.log(userName)

console.log("========================================");

const isAdmin = true;
const fileName = isAdmin && `file.mp4`;
console.log(fileName);