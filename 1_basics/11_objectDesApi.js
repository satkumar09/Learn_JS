const course = {
  coursename: "JS",
  price: "999",
  courseInstructor: "hitesh"
}

//console.log(course.courseInstructor); - too lengthy
const {courseInstructor: instructor} = course    // destructuring
console.log(instructor);                   // hitesh

// JSON file structure:
// {
//   "name": "Satya",
//   "coursename": "JS",
//   "price": "free"
// }
//
// or 
//
// [
//   {},
//   {},
//   {}
// ]

