//singleton (using constructor)

//not singleton (using object literals)

const mySym = Symbol("key1")
const mySymbol = Symbol("key2")

const JsUser = {
  name: "Satyajit", 
  "full name": "Satyajit Kumar",
  mySym: "mykey1",                   // (wrong) will be taken as string 
  [mySymbol]: "mykey2",              // (right) now this will be taken as a symbol
  age: 22, 
  location: "Jaipur",
  email: "satya@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}
/*
console.log(JsUser.email);            // satya@gmail.com
console.log(JsUser["email"]);         // satya@gmail.com
console.log(JsUser.fullname);         // undefined (can't access using dot operator)
console.log(JsUser["full name"]);     // Satyajit Kumar (this way can be used to access)

console.log(JsUser.mySym);            // mykey1
console.log(typeof JsUser.mySym);     // string (should have been symbol)
console.log(JsUser[mySymbol]);        // mykey2 (can't access using dot)

JsUser.email = "satkumar2222@gmail.com"
Object.freeze(JsUser)                 // now no change can be done on the object JsUser
JsUser.email = "satyakumar3333@gmail.com"
console.log(JsUser);
*/
/* 
{
  name: 'Satyajit',
  'full name': 'Satyajit Kumar',
  mySym: 'mykey1',
  age: 22,
  location: 'Jaipur',
  email: 'satkumar2222@gmail.com',    //no change after freeze
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key2)]: 'mykey2'
}
*/

JsUser.greeting = function(){
  console.log("Hello JS User");
}

console.log(JsUser.greeting);        // [Function (anonymous)]
console.log(JsUser.greeting());      // Hello JS User

JsUser.greetingTwo = function(){
  console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingTwo());   // Hello JS User, Satyajit

