// For each doesnt create a new array but is used to print the same array and perform the function on it
// For each doesnt return anything

const nums = [1, 2, 3, 4 , 5]

// nums.forEach((val) => {console.log(val)})

// nums.forEach(num => {console.log(num*2)})

// but to make a new array we need to use map 
function double(n){
    return n * 2
}
let newArr = nums.map(double)
console.log(newArr);
