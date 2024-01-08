const user = {
  username: "Satyajit",
  price: 999, 

  welcomeMessage: function(){
    console.log(this);                                          /* {
      username: 'Satyajit', or username: 'Sam', (based on call)
      price: 999,
      welcomeMessage: [Function: welcomeMessage]
    }  the current object will be printed
                                                                */
    console.log(`${this.username}, welcome to website`);        // this -> refers to the current context
  }
}

console.log(this);         // {} (empty object)
// user.welcomeMessage()   // Satyajit, welcome to website
// user.username = "Sam"
// user.welcomeMessage()   // Sam, welcome to website

// function chai(){
//   console.log(this);
// }

// chai()                     
/* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Getter/Setter],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  crypto: [Getter]
}                          */

function chai(){
  let username = "Satyajit"
  console.log(this.username);           // doesn't work inside function (only in object)
}

chai()                     // undefined

//Arrow Function:  () => {}   (we just store it inside a variable)
const chai2 = () => {
  let username = "Satyajit"
  console.log(this);
}

chai2()                    // {}

const addTwo = (num1, num2) => num1 + num2    // (implicit return)- can be used for one line function 
//const addTwo = (num1, num2) => (num1 + num2)      (same implicit return)  -> {} use kiya to return use karna padega

// same as const addTwo = (num1, num2) => {return num1 + num2}  (explicit return)

const addTwo2 = (num1, num2) => ({username: "Satyajit"}) //for object you will have to use () and {}
console.log(addTwo2());   // { username: 'Satyajit' }
