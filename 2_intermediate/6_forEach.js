const coding = ["js", "ruby", "c++", "java"]

coding.forEach(function(val){
  console.log(val);
})
/*
js
ruby
c++
java
*/
// using arrow function
coding.forEach((val)=>{
  console.log(val);
})
/*
js
ruby
c++
java
*/
//we can also give reference of other function inside for each
const addOne = (item) => {
  console.log(`${item} prog lang`);
}

coding.forEach(addOne)
/*
js prog lang
ruby prog lang
c++ prog lang
java prog lang
*/

//we can also access much more than just the value
coding.forEach((item,index,arr)=>{
  console.log(item,index,arr);
})
/*
js 0 [ 'js', 'ruby', 'c++', 'java' ]
ruby 1 [ 'js', 'ruby', 'c++', 'java' ]
c++ 2 [ 'js', 'ruby', 'c++', 'java' ]
java 3 [ 'js', 'ruby', 'c++', 'java' ]
*/

// to access [{},{},{}]
const  myCoding = [
  {
    langName: "C++",
    langFileName: "cpp"
  },
  {
    langName: "java",
    langFileName: "java"
  },
  {
    langName: "python",
    langFileName: "py"
  }
]

myCoding.forEach((item)=>{
  console.log(item.langFileName);
})
/*
cpp
java
py
*/

