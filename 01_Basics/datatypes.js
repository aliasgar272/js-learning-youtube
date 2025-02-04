// Primitive Data types
// 7 types
//They are call by valaues
// eg String , number, BigInt, null, undefined, Symbol, Boolean;
//Javascript is dynamically typed , bec we dont need to define the dataype;
// eg of Symbol , used in React to define buttons and all uniquely
const id = Symbol('123')
const second_id = Symbol('123')
console.log(id===second_id);
console.log(typeof id);


//undefined
// by default if you dont assign a value to variable its undefined 
let var1;
console.log(typeof var1);


//Non Primitive dataypes (Reference) these are call by references
// Arrays , Function and Object
// Arrays
const fruits = ["apple" , "tomato" , "orange"];
// Object ; anytihng in {} is an object, but you can store it in a variable
let profile = (
{
    age : 22,
    name : 'Ali'
})
console.log(profile);

let MyFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof MyFunction);
console.log(typeof profile);
console.log(typeof fruits);

/* typeof 
int = integer
String = String 
null = Object
undefined = undefined
Symbol = symbol
BigInt = object

Non Primitive
Object = object
Array = object
Function = funtion (object function)
*/

//************************************************************************************************************ */

/*Stack Memory (Primitive datatype) - Gives the copy of the value */
let str1 = "Hello"
let str2 = str1
str2 = "hey";
console.log(str1);
console.log(str2);
// Here the value of str1 doesnt change because when we change the str2 as we dont change the original value but store the copy of it
 
/*Heap Memory (Non-Primitive datatypes) - Gives the reference of value (any change is in the original value) */
let numOne = {
    email : 'abc@gmail.com',
    name : 'abc'
}
let numTwo = numOne
console.log(numOne.email);
console.log(numTwo.email);

numTwo.email = 'xyz@gmail.com'

console.log(numOne.email);
console.log(numTwo.email);

