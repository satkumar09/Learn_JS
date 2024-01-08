/*
const myObject = {
  'game1': 'NFS', 
  'game2': 'Spiderman'
}
for(const [key, val] of myObject){
  console.log(`${key} :- ${val}`);  // error: myObject is not iterable, hence for of doesn't work like this on JS Object
}
// hence we can't iterate over object using for of loop
*/

//for in loop

const myObject = {
  js: 'javascript', 
  cpp: 'C++', 
  rb: 'ruby', 
  swift: 'swift by apple'
}

for (const key in myObject){
  console.log(key);   // js cpp rb swift (hence we can access keys)
}

// so to access values from key is simple

for (const key in myObject){
  console.log(`${key} shortform is for ${myObject[key]}`);   
}
// myObject[key] is used to access the values
/* 
js shortform is for javascript
cpp shortform is for C++
rb shortform is for ruby
swift shortform is for swift by apple
*/

const programming = ["js", "rb", "py", "jave", "cpp"]
for(const key in programming){
  console.log(`${key}-${programming[key]}`);
}
/*
0-js
1-rb
2-py
3-jave
4-cpp
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map){
  console.log(key);                   // no output 
}
// hence we can't iterate over map using for in loop