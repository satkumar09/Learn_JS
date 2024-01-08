/*
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

// mostly we consume promise but for better understanding lets see how to create promise
// promise creation

/*
const promiseOne = new Promise((resolve, reject) => {
  //Do an async tast
  //DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is complete");
  },1000)
})

promiseOne.then(() => {
  console.log("Promise consumed")
})

Output: Async task is complete
[as we can see "Promise consumed never got printed" as we never connected the resolve and the then]

*/

// So to do that: 
const promiseOne = new Promise((resolve, reject) => {
  //Do an async tast
  //DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is complete");
    resolve()
  },1000)
})

promiseOne.then(() => {            //promise consumption
  console.log("Promise consumed");
})

//Output: 
// Async task is complete
// Promise consumed

//Other way
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve()
  }, 1000);
}).then(() => {            //promise consumption
  console.log("Async 2 resolved")
})
// Output: 
// Async task 2    
// Async 2 resolved

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({username: "Chai", email: "chai@example.com"})      // these arguments can be received by then()
  }, 1000);
})
promiseThree.then((user) => {      //promise consumption
  console.log(user);  // { username: 'Chai', email: 'chai@example.com' }
})


const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true
    //error = false
    if(!error){
      resolve({username: "satya", password: "123"})
    }else{
      reject("ERROR: Something went wrong")    // used to send error 
    }
  }, 1000);
})
/*
const username = promiseFour.then((user) => {  //promise consumption
  console.log(user);
  return user.username
})

// console.log(username);  //will give error can't access like this
*/
//Right way: chaining [what the upper then returns will come to the lower then]
promiseFour.then((user) => {  //promise consumption
  console.log(user);
  return user.username
}).then((username) => {
  console.log(username);
}).catch((error) => {  //invoked when error is generated 
  console.log(error);
}).finally(() => {
  console.log("The promise is either resolved or rejected")      //it will get invoked dispite the promise get resolved or rejected 
})
/*
Output: 
1. 
ERROR: Something went wrong  (if error = true)
The promise is either resolved or rejected
2. 
{ username: 'satya', password: '123' } (if error = false)
satya                                  
The promise is either resolved or rejected
*/

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true
    //error = false
    if(!error){
      resolve({username: "javascript", password: "123"})
    }else{
      reject(`ERROR: Something went wrong`)
    }
  }, 1000);
})

//other way to consume: using async function
/*
async function consumePromiseFive(){
  const response =  await promiseFive
  console.log(response);
}
consumePromiseFive()

//Output: 
//if error=false:
//{ username: 'javascript', password: '123' } 
//if error=true:
// no output but an error saying you should use the try catch block to catch error
*/
//better way to consume: using async and using try catch block
const consumePromiseFive = async () => {
  try{
    const response =  await promiseFive
    console.log(response);
  }catch(error) {
    console.log(error);
  }
}
consumePromiseFive()     // ERROR: Something went wrong  (as error = true)


//next topic intro
/*
getAllUsers = async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
  }catch (error){
    console.log("ERROR: ", error)
  }
}
getAllUsers()
*/
// above thing can be done using fetch

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
  return response.json()
}).then((data) => {
  console.log(data);
}).catch((error) => console.log(error))