// Declaration of an Array

const Arr = [1, 2, 3, 4]
const Arr2 = new Array('one', 'two', 'three', 'four')
const Arr3 = new Array(`one, two , three, four`)

//Calling an element of array from the indices
// console.log(Arr[2]);
// console.log(Arr2[2]);
// console.log(Arr3);

Arr[6]= 5;      //creates empty slots but puts into the indices given
console.log(Arr); 
//Arrays have shallow copy; i.e it stores the references of the values stored in heap memory

/********************************Array Methods******************************** */
const newArr = Arr2.splice(0, 3)
console.log(newArr);



