// const score = 400
// console.log(score);               // 400

// const balance = new Number(100)   // [Number: 100]
// console.log(balance);

// console.log(balance.length);      // undefined
// console.log(balance.toString());  // 100
// console.log(balance.toString().length);  // 3

// console.log(balance.toFixed(2));  // 100.00

// const otherNumber = 23.89          // 123.89   // 3.89
// console.log(otherNumber.toPrecision(2));   // 24  // 1.2e+2  // 3.9

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());           // 1,000,000
// console.log(hundreds.toLocaleString('en-IN'));    // 10,00,000

//----------------MATHS-------------------

console.log(Math);                         // Object [Math] {}
console.log(Math.abs(-4));                 // 4
console.log(Math.round(4.5));              // 5
console.log(Math.ceil(4.2));               // 5
console.log(Math.floor(4.9));              // 4
console.log(Math.min(4,3,5,2,8));          // 2
console.log(Math.max(4,3,5,2,8));          // 8

console.log(Math.random());                // random value (0.something - 17 precision)


//to generate a random no between two given number
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //any number from 10-20 