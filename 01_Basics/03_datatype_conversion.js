let score = "33"
let name = "Abc"
let valueOfNull = null
let valueOfUndefined = undefined

//types of getting typeof
console.log(typeof score);
console.log(typeof (score));

//Conversion of String to Number
console.log(typeof Number(score));
let isNumber = Number(name)         //String which cannot be converted into number give NaN
console.log(Number(score));         //Number is a method which changes String to number
console.log(Number(name));         //Number is a method which changes String to number

console.log(Number(valueOfNull));       //Number Converts null into 0 
console.log(Number(valueOfUndefined));       //Number Converts undefined into NaN

//Just like Numbers there is Boolean which converts 1 into true ; 0 into false, empty string into false 
//Just like Numbers there is String which converts into strings 

// Operations doing complex

console.log("1" + 2); // this considers both as strings
console.log(1 + "2");
console.log(1 + 1 + "2");   //First perform op on int then combine strings
console.log("2" + 1 + 1 );   //Consider all as strings and concate them
