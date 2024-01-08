/*
// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
      //console.log("5 is best number");
  }
  //console.log(element);
  
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop value: ${i}`);
 for (let j = 1; j <= 10; j++) {
  //console.log(`Inner loop value ${j} and inner loop ${i}`);
  //console.log(i + '*' + j + ' = ' + i*j );
 }
  
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
  
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
  
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
      console.log(`Detected 5`);
      continue
  }
 console.log(`Value of i is ${index}`);
  
}


let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray2 = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray2.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

*/


// for of, for in, for each loops
// usually used to access data of the format:- 
// ["", "", ""]          array of string
// [{}, {}, {}]          array of objects


// for of loop
//for(const iterator of object){code}     -here object doesn't indicate JS object but its used in a broader terminology

const arr = [1, 2, 3, 4, 5]
for(const num of arr){
  console.log(num);           // prints 1-5
}

const greetings = "Hello world!"
for(const greet of greetings){
  console.log(`Each char is ${greet}`);  // Each char is H-!
}



// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);                       
/* 
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
} 
//no duplicate values, only stores unique value
*/

for(const key of map){
  console.log(key);
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

for(const [key, val] of map){           // distructure of array 
  console.log(`${key} :- ${val}`);
}
/*
IN :- India
USA :- United States of America
Fr :- France
*/

