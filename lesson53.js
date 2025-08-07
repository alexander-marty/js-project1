for (let i = 1; i < 5; i++) {
    console.log(`Loop 2 - ${i}`)
}

let i = 1;

while (i < 5) {
    console.log(`Loop 2 || ${i}`)
    i++
}

console.log(`--------------------------`)

const array = [1, 4, 6, 7];

for (let i = 0; i < array.length; i++) {
    if(array[i] < 5){
    console.log(array[i])
    } else{
        break;
    }
}

let a = 0;

while(a < array.length && array[a] < 5){
    console.log(`array element - ${array[a]}`);
    a++;
}

let b = 12;

do {
console.log(b);
b++
} while(b < 0)