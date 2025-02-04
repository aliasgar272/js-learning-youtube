// {} anything between this is scope 
// dont use var for variable declaration as it doesnt follow the scoping mechanism

let a =10                   //global scope
let b =20

if(a < b){
    let a = 20              //local scope
    let b = 10
    console.log(a, b);
}
console.log(a, b);

