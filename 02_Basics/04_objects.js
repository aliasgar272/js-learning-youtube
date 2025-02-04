// Singleton Objects are declared as 
const bumbleUser = new Object()

// console.log(bumbleUser);
//Non Singleton Objects are declared as
const tinderUser = {}
tinderUser.name = "Aliasgar"
tinderUser.email = "abc@gmail.com"

// console.log(tinderUser);

//Nested Objects

const okCupid = {
    username: {
        fullname: {
            name: "Aliasgar",
            mname: "Hasnain",
            sname: "Chatri"

        }
    }
}

// console.log(okCupid.username.fullname.mname);

/* Combining the objects*/

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

const obj3 = Object.assign( {},obj1, obj2)             // if you dont put {} the ob1 becomes the target and its value gets changed that is ob3 === ob1
// console.log(`The object 3 is `, obj3);

// another way of combining the objects is by SPREADING

const obj4 = {...obj1, ...obj2}
// console.log(obj4);

/*   When data comes from database its in the form of an array having objects   */ 

const dbUsers = [
    {
        email: "abc@hot.com",
        name: "ali"

    },
    {
        email: "ali@somaiya",
        name: "behlul"
    },
    {

    }
]

// console.log(dbUsers[1].email);      //array => [1] indice of array (here object is there) => key of array (email)


/* Taking data types of keys of an object */

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));           //the output is keys stored in an array
// console.log(Object.values(tinderUser));           //the output is keys stored in an array


/* Object De-structuring */

const course = {
    courseInstructor: "Ali",
    price : 999,
    email:"ali@somaiya"
}

const {courseInstructor: instructor} = course               // here we are using the acronyms of keys in objects, so that it can be used easily
console.log(instructor);
