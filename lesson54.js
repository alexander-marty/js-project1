const array = [1, 4, 6, 7, `data`];

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
};

console.log(`============================`)

for (let element of array) {
    console.log(element)
}

console.log(`============================`)

for (let index in array) {
    console.log(array[index])
}