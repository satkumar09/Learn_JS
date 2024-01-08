//1. Object literal

const user = {
  username: "hitesh",
  loginCount: 8, 
  signedIn: true,
  getUserDetails: function() {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`); //this gives the current context
    console.log(this);
  }
}

console.log(user.username);      // hitesh
console.log(user.getUserDetails());
/*
Got user details from database
Username: hitesh
{
  username: 'hitesh',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
undefined
*/
console.log(this);              // {}


//2. Constructor Function: new keyword

function User(username, loginCount, isLoggedIn){
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn
  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }
  return this      //even if you don't write this line the code will work as it is. it's implicitly defined
}
/*
//the below arrow function is same as the above normal function, but don't know why it gives somewhat different result when printed using console.log() in this example

const User = (username, loginCount, isLoggedIn) => {
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn
  return this
}
*/
const UserOne = User("satya",12,true)
const UserTwo = User("hitesh",11,false)
console.log(UserOne);     // { username: 'hitesh', loginCount: 11, isLoggedIn: false }    should have been { username: 'satya', loginCount: 12, isLoggedIn: true }

// To handle this issue: use new keyword 

const UserThree = new User("satyajit",10,true)
const UserFour = new User("rahul",15,false)
console.log(UserThree);  // User { username: 'satyajit', loginCount: 10, isLoggedIn: true }     as it should be

console.log(UserOne.constructor);   // [Function: Object]