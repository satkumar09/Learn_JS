let myDate = new Date();
console.log(myDate);                     //2023-12-23T15:12:23.029Z

console.log(typeof myDate);              // object
console.log(myDate.toString());          // Sat Dec 23 2023 20:44:38 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());      // Sat Dec 23 2023
console.log(myDate.toLocaleString());    // 23/12/2023, 8:59:52 pm

let myCreatedDate = new Date(2023, 0, 23) // other way: let myCreatedDate = new Date("01-23-2023") 
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myTimeStamp = Date.now()
console.log(myTimeStamp);                  // 1703344871494 - time in milisecond from 1970(standard)
console.log(myCreatedDate.getTime());      // 1674412200000
console.log(Math.floor(Date.now()/1000));  // 1703345019 (in seconds)

let newDate = new Date()
console.log(newDate);                   // 2023-12-23T15:26:43.899Z
console.log(newDate.getMonth() +1);     // 12 (December=12)
console.log(newDate.getDay());          // 6 (Saturday=6)


//to customize
newDate.toLocaleString('default',{
  weekday: "long"
})



