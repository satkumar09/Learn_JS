// Syntax: setInterval((){}, time,"")   // continuosly run the function after the specified time. The third argument is used to pass parameters

/*
const sayDate = (str) => {
  console.log(str, Date.now());
}

const intervalId = setInterval(sayDate, 1000, "Hello")

// to stop this setInterval
// Syntax: clearInterval(reference)
//Example for the above the case: 

clearInterval(intervalId)
*/

//Proj: add and clear interval on pressing start and stop

const h1Text = document.querySelector('h1')

let IntervalId

document.querySelector('#start').addEventListener('click', (e) => {
  let x = 1
  IntervalId = setInterval(() => {
    if(x===1){
      h1Text.innerHTML = `Chai aur Code`
      x=0
    }else if(x===0){
      h1Text.innerHTML = `Chai aur Javascript`
      x=1
    }
  }, 2000)
})

document.querySelector('#stop').addEventListener('click', (e) => {
  clearInterval(IntervalId)
})
