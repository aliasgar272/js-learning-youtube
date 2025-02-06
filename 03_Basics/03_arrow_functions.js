const profile = {
    userName: 'Ali',
    age: 22,

    welcomeMessage : function() {
        console.log(`${this.userName}, welcome here !`);            // this is used in an object in current context
        console.log(this);
        
    }

}
// profile.welcomeMessage()
// profile.userName = 'asgar'
// profile.welcomeMessage()

// console.log(this);       //if 'this' is used in browser 'Window' is the global object which is used, but here we get empty {}

/* ++++++++++++++++++++++ Important note +++++++++++++++++++++++*/
// function day (){
//     const name = 'Ali'
//     console.log(this);                      // this will give different parameters unklike the output in object
//     console.log(this.userName);                      // 'this' cannot be used in a function, only in an object


// }
// day()

/* ++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++*/

const addTwo = (num1, num2) => {
        return num1 + num2                          //explicit function, if using {} use return 
}
 //other way of defining arrow function 
 const sumTwo = (num1, num2) => num1 + num2         // implicit function , no need for return
 
 const jodoTwo = (num1, num2) => (num1 + num2)         // implicit function , no need for return,

//  console.log(addTwo(5,5));
//  console.log(sumTwo(5,6));
//  console.log(jodoTwo(5,7));
 
const returnObject = () => ({userName : "Aliasgar"})
console.log(typeof returnObject);                   // returning a function
console.log(typeof returnObject());                 //() with this its returns an object, but its a function only
console.log(returnObject);                            
console.log(returnObject());                            
