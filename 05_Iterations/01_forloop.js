// For Loop 

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop is ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop is ${j} and Outer loop is ${i}`);
        
    }
    
}

// Printing in an Array 

let myArray = ["Ali", "Hamza", "Idris"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
      
}


// Break and Continue

// for (let index = 1 ; index <=10 ; index++){
//     console.log(`The index i is ${index}`);
//     if(index == 7 ){
//         console.log("My favourite number is 7, thala for a reason");
//         break 
//     }
// }
    
// for (let index = 1 ; index <=10 ; index++){
//     if(index == 7 ){
//         console.log("My favourite number is 7, thala for a reason");
//         continue                                                        //Let it continue for once
//     }
//     console.log(`The index i is ${index}`);
    
// }

// In do while loop it will execute the code atleast once

// let score = 11
// do {
//     console.log(`The score is ${score}`);
//     score++ ;
// }
// while (score <=10);

let n =5;
let tara = ""; 
if (n > 1) {
    
        for(let i = 1; i <= n; i++){
            for (let j = 1; j <= i; j++) {
            tara += "* "              
    }
    tara += "\n"
}
    console.log(tara);
}else {
    tara = "Number must be greater than 1 to print star pattern.";
}

let num = 5;
let pattern = "";    //pattern string
if (num > 1) {      //no star pattern for 0 or negative numbers.
    for (let i = 1; i <= num; i++) {    //first 'for loop' for horizontal lines
        for (let j = 1; j <= i; j++) {      //second 'for loop' to print star
            pattern += "* ";    //adding * to pattern string
        }
        pattern += "\n";    //new line after row completion
    }
    console.log(pattern);   //printing star to console
}
else {
    pattern = "Number must be greater than 1 to print star pattern.";
}
