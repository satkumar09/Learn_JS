const coding = ["js", "ruby", "c++", "java"]

const values = coding.forEach((val)=>{
  //console.log(val);
  return val
})

console.log(values);                 // undefined 
// for each never returns value, hence need of filter which returns value

//Filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num > 4)
console.log(newNums);              // [ 5, 6, 7, 8, 9, 10 ]

const newNums2 = myNums.filter((num) => {
  num > 4
})
console.log(newNums2);              // []
// why?? because as we saw earlier in arrow function in case of explicit return when we use {} we must use return keyword to return the value, so the correct way will be:-

const newNums3 = myNums.filter((num) => {
  return num > 4
})
console.log(newNums3);              // [ 5, 6, 7, 8, 9, 10 ]


//although we can use for each for doing the same but we will need some extra work

const newNum = []
myNums.forEach((num)=>{
  if(num>4){
    newNum.push(num)
  }
})
console.log(newNum);              // [ 5, 6, 7, 8, 9, 10 ]

// more filter 

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//Books with genre = History
const userBooks1 = books.filter((bk) => bk.genre==="History")
console.log(userBooks1);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/

//Books which published after 2000
const userBooks2 = books.filter((bk)=>bk.publish>2000)
console.log(userBooks2);
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/

//Books with genre = History and published after 1995
const userBooks3 = books.filter((bk)=>(bk.genre=="History" && bk.publish>1995))
console.log(userBooks3);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/

//Map

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newVal = myNumbers.map((num)=> num+10)
console.log(newVal);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/
//here also we can use for each for doing the same but we will need some extra work

//Chaining:
const newVal2 = myNumbers
                  .map((num) => num*10)
                    .map((num) => num+1)
                      .filter((num) => num>=90)

console.log(newVal2);       // [ 91, 101 ] -> (as 9*10+1 and 10*10+1 is > 90)


//Reduce

const myNum = [2,5,8]

const myTotal = myNum.reduce(function(acc, curr) {
  console.log(`Accumulator: ${acc} and Current Value: ${curr}`)
  return acc + curr
}, 0)

console.log(myTotal);
/*
Accumulator: 0 and Current Value: 2    // acc = initial value = 0 & curr = 2
Accumulator: 2 and Current Value: 5    // acc = acc+curr = 0+2 = 2 & curr = 5
Accumulator: 7 and Current Value: 8    // acc = acc+curr = 2+5 = 7 & curr = 8
15                                     // returns acc+curr = 7+8 = 15
*/

//using arrow function
const myTotal1 = myNum.reduce((acc,curr) => acc+curr, 0)
console.log(myTotal1);                 // 15


const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "python course",
    price: 1999
  },
  {
    itemName: "story book",
    price: 500
  },
  {
    itemName: "phone",
    price: 9999
  },
]

//add all the prices in the shopping Cart

const addedPrice = shoppingCart.reduce((acc,curr) => acc+curr.price, 0)
console.log(addedPrice);        // 15497



