/*document.getElementById('owl').onclick = function(){
  alert("owl clicked")
} */ // not a good approach

// other approaches
//attachEvent()
// jQuery - on

//better approach - use of eventlistner: more features, gives ability of propagation which is missing in onclick

// syntax document.getElementById('desired-element').addEventListener('desired-event', (e) => {}, true/false)             [default-> false]
// Event propagation -> 2 contexts -> Event Bubbling and Event Capturing

/*1. Event Bubbling (using false - default): bubbling up (inside to outside), mean that inside event will trigger first then the outside even will trigger

//Example: 
document.getElementById('images').addEventListener('click', (e) => {
  console.log("clicked inside the ul"); 
  
}, false)

document.getElementById('owl').addEventListener('click', (e) => {
  console.log("Owl Clicked"); 
}, false)

//when clicked on owl the output: 
//Owl Clicked
//clicked inside the ul
//as you can see the inside owl element(li) triggered first then the outside images element(ul) got triggered
*/
/*
//2. Event Capturing (using true): mean that outside event will trigger first then the inside even will trigger

//Example: 
document.getElementById('images').addEventListener('click', (e) => {
  console.log("clicked inside the ul"); 
  
}, true)

document.getElementById('owl').addEventListener('click', (e) => {
  console.log("Owl Clicked"); 
}, true)

//when clicked on owl the output: 
//clicked inside the ul
//Owl Clicked
//as you can see the outside images element(ul) triggered first then the inside owl element(li) got triggered
*/
//we can use either of them based on the requirement


document.getElementById('owl').addEventListener('click', (e) => {
  console.log(e); 
  e.stopPropagation()  // prevents bubbling up, mean uper wale example me sirl Owl Clicked print hoga agar ye laga diya owl ke function ke andar

  /* important ones:
    
    type, timestamp, dafaultPrevented, 
    target, toElement, srcElement (very important), 
    clientX, clientY, screenX, screenY, 
    altkey, ctrlkey, shiftkey, keyCode
  */
}, false)

//Prevent Default

document.getElementById('google').addEventListener('click', (e) => {
  e.preventDefault()        // will prevent the default behaviour and stop the browser from opening google link
  e.stopPropagation()
  console.log(`google clicked`);
})

/*

//Small project: image should disappear once we click on it

document.querySelector('#images').addEventListener('click', (e) => {
  console.log(e.target.parentNode);
  if(e.target.tagName === 'IMG'){
    console.log(e.target.id);
    let removeIt = e.target.parentNode
    removeIt.remove();
    //removeIt.parentNode.removeChild(removeIt)   //alt way to remove
  }
})
*/
