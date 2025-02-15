const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc , currval) {
//         console.log(`acc : ${acc} and currval is ${currval}`);
        
//         return acc + currval
// }, 0 )                          // 0 is the accumulators initial value

// same this in arrow function
const myTotal = myNum.reduce( (acc , currval) => acc + currval, 0 )

console.log(myTotal);
