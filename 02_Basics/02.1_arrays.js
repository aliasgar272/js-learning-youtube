const student = ["Ali", "Behlul", "Mufaddal"]

console.log(student);
console.log(student[0]);

// since array student is const you cannot change its value like
// student = ["Aliasgar" , "Behlul", "Mufaddal"]
// But you can mutate individual elements of an array 
student[0] = "Aliasgar"
console.log(student);



