// Dates

let myDate = new Date();

// console.log(myDate);
// console.log("");
// console.log(myDate.toString());
// console.log("");

// console.log(myDate.toDateString());
// console.log("");

// console.log(myDate.toISOString());
// console.log("");

// console.log(myDate.toLocaleString());
// console.log("");

// console.log(myDate.toLocaleDateString());
// console.log("");

const customDate = new Date();

const newDate = customDate.toLocaleString('default', {
    weekday: "long", 
    day: "numeric"
})
console.log(newDate);
