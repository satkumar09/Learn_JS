// Stack (Primitive), Heap (Non-primitive)

/* Stack

let myName = "Satyajit"
let anotherName = myName
anotherName = "Sat"

console.log(myName);        // Satyajit - no change in myName as in line 5 copy of myName was given to anotherName 
console.log(anotherName);   // Sat

*/

/* Heap

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl"
}

let userTwo = userOne     // here reference is given to userTwo instead of copy. Therefore now both userOne and userTwo reference to same memory in heap were the email and upi is saved. So any change in either of them (userOne or userTwo) will be reflected on the orignal

userTwo.email = "sat@gmail.com"

console.log(userOne.email);  //sat@gmail.com
console.log(userTwo.email);  //sat@gmail.com

*/