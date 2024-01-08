// Syntax: setTimeout((){}, time)   // run the function after the specified time

/*
setTimeout(() => {
  console.log(`Satyajit`);
}, 2000)                   // prints name on console after 2 seconds
*/

const changeText = () => {
  document.querySelector('h1').innerHTML = "hello world"
}

const changeMe = setTimeout(changeText, 3000);

//clearTimeout()   // used to stop the setTimeout task before it get finised
//Syntax: clearTimeout(reference)   -> reference: mean ref of the setTimeout we want to stop
//for the above example we can stop the timeout using:
//clearTimeout =(changeMe)

document.querySelector('#stop').addEventListener('click', (e) => {
  clearTimeout(changeMe)
  console.log(`stopped from changing!`);
})