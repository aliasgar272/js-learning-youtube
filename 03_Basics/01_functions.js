function sayMyName(){
    console.log("A");
    console.log("l");
    console.log("i");  
}

// sayMyName()    //sayMyName is reference but after () it is execution

function addTwoNo (number1 , number2){
    const result = number1 + number2              //here result is stored locally and so its scope is within the function
    return result                                 // after return no code will be executed
    console.log("Me Print nahi houga");           
    
}

const result = addTwoNo(3,7)
// console.log(result);

function userName(name= "Behlul"){                            //predined parameters can be passed as well
    return `${name} just logged in `
}
console.log(userName("Ali"));                   /*Arguments can be passed here, if predefined are there then it will override. Also if
                                                if no arguments are passed then it will give*/

                                    
/* To have unknown number of parameters */
function allItems(...items){                    // ... here means rest (... is spread also but use-case is different)
    return items
}
console.log(allItems(20,30 ,40 ));          //returns array

/* Objects in a function */

const user = {
    name: "Ali",
    age: 22
}

function handleObject (anyObjectUsedAsParameter){
    console.log(`Username is ${anyObjectUsedAsParameter.name} and age is ${anyObjectUsedAsParameter.age}`);
    
}
handleObject(user)      //since we passed the object as argument in the function; in function we pass the parameter as this

// you can directly pass Objects, Arrays and other primitives in the function
// handleObject({
//     name : "Behlul",
//     age: 21
// })