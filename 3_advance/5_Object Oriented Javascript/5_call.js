function SetUsername(username){
  //complex DB calls
  this.username = username
  console.log("called")
}

function createUser(username, email, password){
  SetUsername(username)

  this.email = email
  this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); 
/* Output: 
called      
createUser { email: 'chai@fb.com', password: '123' }       
hence, username not set
*/

//right way

function createUser(username, email, password){
  SetUsername.call(this, username)

  this.email = email
  this.password = password
}
const satya = new createUser("satya", "satya@fb.com", "123")
console.log(satya); 
/*Output: 
called
createUser {
  username: 'satya',
  email: 'satya@fb.com',
  password: '123'
}
*/