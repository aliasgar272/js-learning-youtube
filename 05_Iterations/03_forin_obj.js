// in for in loop the key prints the keys of object/array. 

const myLang = {
    js : "Javascript",
    py : "Python",
    c : "C"
}
for (const key in myLang) {
//    console.log(key);
//    console.log(key ,"=>", myLang[key]);          //2nd one is value of that key 
}

const myArr = ["h", "e", "y"]
for (const key in myArr) {
//    console.log(key);
   console.log(`${key}th index has value ${myArr[key]}`);          //2nd one is value of that key 
}

//For in doesnt work on "maps"

