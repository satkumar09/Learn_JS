let myName = "satya   "
console.log(myName.length);         // 8 (which is wrong)
//console.log(myName.trim().length)   // 5 (right but I want to make a similar method to do this)

//3. Prototypes

let myHeros = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}
//heroPower.hitesh()         // Error: heroPower.hitesh is not a function
Object.prototype.hitesh = function() {
  console.log(`hitesh is present in all objects`);
}

heroPower.hitesh()           // hitesh is present in all objects        (now hitesh is accessable by every object)

myHeros.hitesh()            // hitesh is present in all objects       (accessable by the array as well)
// here what we did is that we accessed the top level hierarchy, hence it went to all low level entities like array string


// lets check for low to high: failed
Array.prototype.heyHitesh = function(){
  console.log('Hitesh says hello');
}
myHeros.heyHitesh()        // Hitesh says hello (hence all array has access)
//heroPower.heyHitesh()    // TypeError: heroPower.heyHitesh is not a function       (but object don't have access)


//4. Inheritance

const  User = {
  name: "chai",
  email: "chai@gmail.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment', 
  fullTime: true,
  __proto__: TeachingSupport     // now TASupport will inherite the properties of TeachingSupport
}
Teacher.__proto__ = User        //you can do the same thing outside the class as well

//modern syntax to do the same

Object.setPrototypeOf(TeachingSupport, Teacher)  // now TeachingSupport can access all properties of Teacher



//lets come to our initial problem 
let myName1 = "satya   "
console.log(myName1.length);     // 8

//lets add a method for all string: injecting property in string

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
}

myName1.trueLength()
" hitesh".trueLength()
"icetea".trueLength()
/*Output: 
satya
True length is: 5
 hitesh
True length is: 6
icetea
True length is: 6
*/