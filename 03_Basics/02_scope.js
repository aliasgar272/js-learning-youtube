// {} anything between this is scope 
// dont use var for variable declaration as it doesnt follow the scoping mechanism

let a =10                   //global scope
let b =20

if(a < b){
    let a = 20              //local scope
    let b = 10
    console.log(a, b);
}
console.log(a, b);


// Scope 
function one(){
    const useName = "Ali"
    function two (){
        const myName = 'asgar'
        console.log(useName);
        
    }
    // console.log(myName);                        // My name will not be accessed since its outside the scope where it was declared
    two()
    
}
 one()
/* ++++++++++++++++++++++ Interesting  ++++++++++++++++++++++   */

// two ways of declaring a function 

//first way which is normal way
addOne(10)                                       // CAN BE CALLED BEFORE INITIALIZATION

function addOne (num){
    
    return num + 1
    
}
// Second way of declaring a function 
// addTwo(10)                                  // CANNOT BE DELCARED BEFORE INITIALIZATION
const addTwo = function(num){
    return num + 2
}

console.log(addOne(10));
console.log(addTwo(10));
console.log(typeof addOne);
console.log( typeof addTwo);


