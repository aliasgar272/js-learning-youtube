//singleton
//Objects.create

//Object literal

const mySym = Symbol("mykey");

const jsUser = {
    name: "Ali",
    "full name": "Ali Hasnain Chatri",
    email: "abc@gmail.com",
    loggedIn: ["Monday", "Friday"],
    [mySym] : "myKey1"                       //using Symbol as a key in object 
}

//accessing Objects in two ways
// console.log(jsUser.email);
// console.log(jsUser["full name"]);           //to access "full name" you need this way. "Object.key" cannot be used

// console.log(jsUser[mySym]);                 //accessing Symbol as a key of Object

/* Changing and Freezing in Object*/ 

jsUser.loggedIn = ["Tuesday"]

// Object.freeze(jsUser)                   //Object is freezed
// jsUser.loggedIn = ["Wednessday"]
// console.log(jsUser);

/*   Functions in Object   */

jsUser.greetings = function(){
    console.log("Hello Js User");
    
}
jsUser.greetingsTwo = function(){
    console.log(`Hello Js user, ${this.name}`);             //use this. in the same object , its similar to jsUser.
    
}
console.log(jsUser.greetings());            //if i put jsUser.greetings only then i would get function anonymous
console.log(jsUser.greetingsTwo());            //if i put jsUser.greetings only then i would get function anonymous



