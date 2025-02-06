// Immedietly invoked function expressions
// Sometimes you want a function to execute immediately at the beginning so for that we use iife
// syntax : (function)();
(function executeIife (){
    console.log(`DB connected`);                //Syntax for iife
    
}) ();                                          // this semicolon will let the next iife execute

(function executeIife2 (){
    console.log(`DB connected again`);                //Syntax for iife
    
}) ();

//lets see if arrow function executes

((name) => {
    console.log(`DB connected using arrow function for ${name}`);

})('Aliasgar');
