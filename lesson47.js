const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//rest оператор
const [one, two, ...others] = data;

console.log(one, two, others);
