
function addNumbers (a , b , callBack){
    let result = a + b 
    callBack(result)
}

function showResult(result) {
    console.log(result);
    
}

addNumbers (2 , 4, showResult)
//addNumbers is Higher Order function since it calls a different function as an argument
