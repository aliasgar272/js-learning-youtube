const accountId = 123455
let accName = "Ali"
var accEmail = "ali@google.com"
var accountState

// var has Global Scope like if I define it in a function then that variable can be assigned by all
if(true){
    var a =2 
}
console.log(a);

// let has Local Scope
if (true) {
    let b = "Nahi hoga execute bahar"

}
// console.log(b);      wont be executed since let has local scope

//  const also has Local Scope ; but it's value is immutable

const c = "fixed rahega value " 
// c = "fixed"
console.log(c);

/*
Prefer not to use var because there is the issue of block scope or function scope
*/
// accountId = 1234443
console.log(accountId);
console.table([accName, accEmail, accEmail, accountState])    // table shows all the variables mentioned in between [] .
