
//console.log(Math.PI);      // 3.141592653589793 
// Math.PI = 5
// console.log(Math.PI);     // 3.141592653589793 (value doesn't change)
//why?:-

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
/*
{
  value: 3.141592653589793,
  writable: false,          // hardcoded not writable 
  enumerable: false,
  configurable: false
}
*/

//to do the same with our object

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(chai, 'name', {   //to disrupt the property of name
    writable: false,
    enumerable: false
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {   // to avoid chai nahi bana
        
        console.log(`${key} : ${value}`);
    }
}
/*
price : 250
isAvailable : true
Note: as you can see name is avoided by the loop as we made enumerable: false for name, therefore not iterable
*/