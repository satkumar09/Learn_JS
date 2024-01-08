const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  outdated concatination technique

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //modern way: string interpolation

const gameName = new String('hiteshhc')

console.log(gameName[0]);                     // h
console.log(gameName.__proto__);              // {} various different methods are present to manipulate the string, some of them are as follow:

console.log(gameName.length);                 // 8
console.log(gameName.toUpperCase());          // HITESHHC
console.log(gameName.charAt(2));              // t
console.log(gameName.indexOf('t'));           // 2

const newString = gameName.substring(0, 4)    // hite
console.log(newString);

const anotherString = gameName.slice(-6, 4);  // te (accepts negetive index: reverse me ghum ke count karna hai)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);                    //    hitesh   
console.log(newStringOne.trim());             // 'hitesh' (removes space)

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));         // https://hitesh.com/hitesh-choudhary replaces %20 with -

console.log(url.includes('sundar'));          // false (sundar not present in url)

const newGameName = new String('sat-kum-29')
console.log(newGameName.split('-'));          // [ 'sat', 'kum', '29' ]
console.log(newGameName.split('-', 2));       // [ 'sat', 'kum' ]
