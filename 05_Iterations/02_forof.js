// in for of loop the key prints its values of array. 


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {                             // Object here is used in a broader aspect like array,object, string,
    // console.log(num);               //prints elements of an array or ant object
    
}

let greetings = "Hello"
for (const i of greetings) {
    // console.log(`The values are ${i}`);
    
}

// Maps , like arrays but more operators || Used for 'UNIQUE VALUES'

const map = new Map()
map.set("In", "India")
map.set("USA", "Goro ka desh")
map.set("In", "India")                 // will not print this again
map.set("Fr", "Monsieur")

// console.log(map);
for (const key of map) {
    // console.log(key);               // if you want entire arrays then
    
}
for (const [key, value] of map) {
    // console.log(key,value);               // if you want key value pairs together or differently
    // console.log(value);               
}

// Objects in for of

const myObj = {
    movie1 : "Thor",
    movie2 : "Thor2"
}

for (const [key , value] of myObj) {
    console.log(key,value);         // doesnt work this way for objects 
    
}