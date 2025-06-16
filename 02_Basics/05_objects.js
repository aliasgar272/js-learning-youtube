
// We can access key values of objects inside that function using "this"

const randObj ={
    value : 69,
    myFunction : function (){
        console.log("The value of this object is " + this.value);
        
    }
    
}
randObj.myFunction()
