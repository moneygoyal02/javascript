const score = 100;

console.log(score);

const balance = new Number(200);

console.log(balance); // [Number: 200]

console.log(balance.toFixed(2)); // 200.00
console.log(balance.toString()); // 200

console.log(balance.toPrecision(3)); // 200 // priorty to the number of digits


const hundreds = 10000000000

console.log(hundreds.toLocaleString()); // 10,000,000,000   
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,00,000


// ****************** MATH OBJECT ******************

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.abs(-100)); // 100
console.log(Math.abs(100)); // 100

console.log(Math.round(2.4)); // 2
console.log(Math.floor(2.4)); // 2
console.log(Math.ceil(2.4)); // 3

console.log(Math.random());
console.log(Math.random() * 10); // 0 to 10
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min +1)) + min ); // 10 to 20














