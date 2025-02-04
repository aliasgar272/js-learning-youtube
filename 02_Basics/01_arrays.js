// Declaration of an Array

const Arr = [20, 2, 3, 4]
const Arr2 = new Array('one', 'two', 'three', 'four')
const Arr3 = new Array(`one, two , three, four`)

//Calling an element of array from the indices
// console.log(Arr[2]);
// console.log(Arr2[2]);
// console.log(Arr3);

// Arr[6]= 5;      //creates empty slots but puts into the indices given
//Arrays have shallow copy; i.e it stores the references of the values stored in heap memory

/********************************Array Methods******************************** */
Arr.push(5)
// console.log(Arr); 

// Arr.pop()
// console.log(Arr); 

// let concatArray = Arr.concat(Arr2)
// console.log(concatArray)

Arr.unshift(10)
console.log(Arr);

const newArr = Arr2.splice(0, 2)
console.log(`New array after splicing it is ${newArr}`);

console.log(Arr2.includes('three'));
console.log(Arr.indexOf(20));

// // join method converts it into String
// const joinArray = Arr.join()
// console.log(typeof joinArray);
// console.log( joinArray);



/******Slice and splice */

const arrA = ['a' , 'b' , 'c', 'd', 'e']
console.log('Original Array ',arrA);

const myn1 = arrA.slice(1, 3)   //Slice doesnt modify the array
console.log(myn1);
console.log('After slicing' , arrA );

const myn2 = arrA.splice(1,3)   //Splice modifies the array
console.log(myn2);
console.log('After Splicing' , arrA );

