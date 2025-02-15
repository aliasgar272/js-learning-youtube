const myNums = [1,2,3,4,5,6,7,8,9,10]

// Chaining 

const newNums = myNums.map( (nums) => nums * 10 ).map((nums)=> nums + 1 )  // what second num is will have value of upper num

console.log(newNums);
