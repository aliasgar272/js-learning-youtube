// Falsy Values

// false , 0 , -0 , BigInt 0n , null , undefined , NaN , ""

// Truthy values 

// true , "0" , "false", [], {}, " "(string with a space)


// const emailUser = "ali@gmail.com"

// if (emailUser){                     //Here it is assumed that emailUser has a value that's why it went inside the loop
//     console.log("User has email");  
// }
// else{
//     console.log("User doesnt have email");
 
// }

// const emailUser2 = ""

// if (emailUser2){                     //  emailUser doesnt have a value that's why it didnt go inside the loop
//     console.log("User has email");   
// }
// else{
//     console.log("User doesnt have email"); 
// }

// const emailUser3 = []

// if (emailUser){                     //empty Array of emailUser has a value that's why it went inside the loop
//     console.log("User has email");
// }
// else{
//     console.log("User doesnt have email");
    
// }

// Nullish Coalescing Operator (??) : null undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? undefined
val1 =  undefined ?? 15
// val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary Operator -  (condition) ? true : false

const price = 100
price >=100 ? console.log("expensive") : console.log("cheap");








