// Immediately Invoked Function Expressions (IIFE)

// function chai (){

//     console.log(`DB CONNECTED`);
// }

// chai();

// IIFE is used because we want to run the function immediately after defining it and and doesn't want pollution of the global scope variables

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // ; is used to end the statement and () is used to call the function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// IIFE is just like this 

// const addTwo = () => () 

// () => ()