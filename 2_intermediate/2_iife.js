// Immediately Invoked Function Expressions (IIFE)

// used to restrict the file from getting polluted from global scope and to immediately execute the function 

//Syntax: ()(); 

(function chai(){                   // named iife
  console.log(`DB CONNECTED`);
})();                               // DB CONNECTED

((name) => {                        // unnamed iife
  console.log(`DB CONNECTED TO ${name}`)
})("Satyajit");                     // DB CONNECTED TO Satyajit