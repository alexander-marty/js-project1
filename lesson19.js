console.log(Boolean(0));

// any empty string returns False
console.log(Boolean(''))

// if a variable is undefined
let a;
console.log(Boolean(a));

console.log(Boolean(null));

// if conflicting data types are specified
console.log(Boolean(Number('string')))

console.log(Boolean(NaN));