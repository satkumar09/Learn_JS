/*const myArr = [2,3,4,5,6]
console.log(myArr[2]);                  // 4

const myHeros = ["ironman", "flash"]
const myArr2 = new Array(1,2,3,4)

myArr.push(6)
console.log(myArr);                     // [ 2, 3, 4, 5, 6, 6 ]
myArr.pop()
console.log(myArr);                     // [ 2, 3, 4, 5, 6 ]

myArr.unshift(9)
console.log(myArr);                     // [ 9, 2, 3, 4, 5, 6 ]
myArr.shift();
console.log(myArr);                     // [ 2, 3, 4, 5, 6 ]

console.log(myArr.includes(9));         // false
console.log(myArr.indexOf(3));          // 1

const newArr = myArr.join()
console.log(myArr);                     // [ 2, 3, 4, 5, 6 ]
console.log(newArr);                    // 2,3,4,5,6 (type: changed to string, can check using typeof newArr)

console.log("A ", myArr);               // A  [ 2, 3, 4, 5, 6 ]
const myn1 = myArr.slice(1,3)           // cut array from 1-3 and store in myn1, doesn't include last index
console.log("B ", myArr);               // B  [ 2, 3, 4, 5, 6 ] (no change)
console.log(myn1);                      // [3,4]

console.log("C ", myArr);               // C  [ 2, 3, 4, 5, 6 ]
const myn2 = myArr.splice(1,3)          // cut array from 1-3 and store in myn1, does include last index
console.log("D ", myArr);               // D [2,6] (change: orignal array cut)
console.log(myn2);                      // [3,4,5]
*/

//Advance Array

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);              // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] array inside array
console.log(marvel_heros[3][1]);        // flash

//better way
marvel_heros.pop()
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);                 // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//even more better way
const all_new_heros = [...marvel_heros, ...dc_heros]  //  // ... -> spread operator
console.log(all_new_heros);            // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)  //remove all depth and make it a single array, the argument inside suggest upto what depth you need to flaten the array
console.log(real_another_array);      // [ 1, 2, 3, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Satya"));      // false
console.log(Array.from("Satya"));         // [ 'S', 'a', 't', 'y', 'a' ]
console.log(Array.from({name: "Satya"}))  // [] (returns a empty string as it was unable to convert it into an array)

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]
