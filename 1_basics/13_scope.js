/*
//global scope
var c = 300

let a = 300

if(true){
  //block scope
  let a = 10 
  const b = 20
  var c = 30
}


// console.log(a);      // not available 
// console.log(b);      // not available
console.log(c);         // 30 (should have been 300) hence try to avoid use of var
*/

let a = 300

if(true){
  let a = 10 
  const b = 20
  console.log("Block a: ", a);     // Block a:  10
}

console.log("Global a:", a);       // Global a: 300

function one(){
  const username = "hitesh"
  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);        // will cause error, can't access 
  two()
}
one()


