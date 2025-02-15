const cars = ["Porsche" , "BMW" , "Audi" , "Ferrari", "Honda"]

// After . all the methods called || call back function inside which doesnt have a name || items can be used for all array elements  
cars.forEach(  function (items, index , array){
    // console.log(items,index, array);
    
}  )     

// as arrow function 
cars.forEach( (val) => {
    // console.log(val);
    
})

//or by calling the fn
function printMe (values) {
    console.log(values);
}
// cars.forEach(printMe,console.log("this"));

//+++++++++++++++++ Looping in Array having Object +++++++++++
// usually from array we get arrays and in it there are objects

const myCoding = [ 
    {
        myLanguage: "javascript",
        myFile : "js"
    },
    {
        myLanguage: "java",
        myFile : "java"
    },
    {
        myLanguage: "python",
        myFile : "py"
    }
]

// calling keys of object in an array using forEach loop

myCoding.forEach((val) => {                 // val here are 3 objects , then after the . we can access each key , value
    console.log(val.myFile);
})