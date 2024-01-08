const tinderUser = new Object()       // singleton object
//const tinderUser = {}               // non-singleton object

console.log(tinderUser);              // {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);              // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));     // [ 'id', 'name', 'isLoggedIn' ] (returns array of keys: can be used for loop later)
console.log(Object.values(tinderUser));   // [ '123abc', 'Sammy', false ] (returns array of values: can be used for loop later)
console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]  (returns array of array)

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // True
console.log(tinderUser.hasOwnProperty('isLogged'));    // False

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Satyajit",
      lastname: "choudhary"
    }
  }
}

console.log(regularUser.fullname.userfullname);     // { firstname: 'Satyajit', lastname: 'choudhary' }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}

const obj3 = {obj1, obj2}
console.log(obj3);                       // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }  (not what intended)

//better way
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);                      // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//even more better way
const obj6 = {...obj1, ...obj2, ...obj5} // ... -> spread operator
console.log(obj6);                      // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


