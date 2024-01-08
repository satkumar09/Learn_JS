/*
function sayMyName(){                 // function definition 
  console.log("S");
  console.log("A");
  console.log("T");
  console.log("Y");
  console.log("A");
}

sayMyName();                         // function call
*/

function add(num1, num2){            // parameters: num1, num2
  console.log(num1 + num2);
}

add()                               // NaN (no arguments)
add(2, 3)                           // 5   (2 and 3 are arguments)
add(2, "a")                         // 2a
add(2, null)                        // 2

const result = add(3, 5)            // 8 (printed as console.log present in the function definition)
console.log(result);                // undefined (nothing returned)

function add2(num1, num2){            
  // let result = num1 + num2
  // return result
  return num1+num2               //better way
}

const result2 = add2(3, 5)
console.log(result2);               // 8

function loginUserMsg(username){
  return `${username} just logged in`
}
 
console.log(loginUserMsg());        // undefined just logged in
/* can be avoided: 
function loginUserMsg(username = "Sam"){   // default value
  return `${username} just logged in`
}
console.log(loginUserMsg());        // Sam just logged in
*/
console.log(loginUserMsg(""));      //  just logged in
console.log(loginUserMsg("Satya")); // Satya just logged in


function calculateCartPrice(...num1){  // ... -> rest operator (same as spread, differentiated based on use)
  return num1
}
console.log(calculateCartPrice(200,400,500,2000)); // [ 200, 400, 500, 2000 ] (rest wraps up all arguments into an array)

function calculateCartPrice2(val1, val2, ...num1){
  return num1
}
console.log(calculateCartPrice2(200,400,500,2000)); // [ 500, 2000 ] (200 and 400 stored in val1 and val2 resp. Rest wraped by rest operator)

const user = {
  username: "Satya",
  price: 200
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)        // Username is Satya and price is 200
handleObject({            // Username is Sat and price is 199
  username: "Sat",
  price: 199
})
handleObject({       // Username is Satyajit and price is undefined
  username: "Satyajit",
  prices: 199
})

const myNewArray = [200, 400, 100, 600]
function retSecondValue(getArray){
  return getArray[1]
}
console.log(retSecondValue(myNewArray));  // 400
console.log(retSecondValue([1,2,3,4]));   // 2


//two common ways to define a function:

console.log(addOne(5));                   // 6 (will give no error)
function addOne(num){
  return num + 1
}
addOne(5)                                 //    will print nothing


console.log(addTwo(5));                   //will give error (Cannot access 'addTwo' before initialization) as we are storing the function in a variable
const addTwo = function(num){
  return num + 2
}
addTwo(5)                                 //    will print nothing
