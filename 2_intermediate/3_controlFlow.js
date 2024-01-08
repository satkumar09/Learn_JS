// if(condition){} else if(condition){} else{}
// conditions:- true or false 
// false: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// true: anything other than the above falsy values
// some surprising truthy values: "0", 'false', " ", [], {}, function(){}
// operators to check the condition:  <, >, <=, >=, ==, !=, ===

if(2=="2"){
  console.log("== executed");               // == executed
} else{
  console.log("== not executed");           // no output 
}

if(2==="2"){       // strict checking(also check for same datatype)
  console.log("=== executed");              // no output 
} else{
  console.log("=== not executed");          // === not executed
}

// switch(key){
//   case 1: 
//     //code
//     break;
//   case 2: 
//     //code
//     break;
//   default:   // if no case matches
//     //code 
//     break;
// }

const month = 2
switch(month){
  case 1: 
    console.log("jan");
    break;
  case 2: 
    console.log("feb");                  // feb
    break;
  case 3: 
    console.log("mar");
    break;
  default:   
  console.log("nothing matched");
    break;
}


//to check if array is empty 

const userEmail = [];
if(userEmail.length === 0)
  console.log("Array is empty");         // Array is empty

//to check if object is empty 

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
  console.log("Object is empty");        // Object is empty
}

// Nullish Coalescing Operator (??): null undefined
// used to handle errors 

let val1,val2,val3
val1 = 5 ?? 10
console.log(val1);          // 5 (the first values gets inserted)

val2 = null ?? 10
console.log(val2);          // 10 (avoids null)

val3 = undefined ?? 15
console.log(val3);          // 15 (avoids undefined)

val4 = undefined ?? null
console.log(val4);          // null (avoids undefined at first pos)

val5 = null ?? undefined
console.log(val5);          // undefined (avoids null at first pos)

val6 = null ?? 15 ?? 25
console.log(val6);          // 15 (choose first value after avoiding null)

// Terniary Operator
// codition ? true : false

const i = 100
i >= 80 ? console.log("greater than 80") : console.log("smaller than 80")                   // greater than 80

const j = 60
j >= 80 ? console.log("greater than 80") : console.log("smaller than 80")                   // smaller than 80