const accountId = 123455
let accName = "Ali"
var accEmail = "ali@google.com"
var accountState

/*
Prefer not to use var because there is the issue of block scope or function scope
*/
// accountId = 1234443
console.log(accountId);
console.table([accName, accEmail, accEmail, accountState])    // table shows all the variables mentioned in between [] .
