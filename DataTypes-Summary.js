//  primitive

// 7 types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3



const isLoggedIn = false 

const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 3652532526753362535238n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myobj = {
    name:"anil",
    age:20,
}

const myFunction = function (){
    // console.log("Hello World");
}

// console.log(typeof myFunction)





/// **********************  Stack , Heap ********************


// stack (primitive), Heap (Non-Primitive)

// satck ma jailepani copy value marta aaunxa tesai le change gare copy bata marta change hunca..

let MyYoutubename = "anilpandeydotcom"

let anothername = MyYoutubename
anothername = "chaiaurcode"

console.log(MyYoutubename);
console.log(anothername);

// heap ma jaile pani refrence bata value ligxa aane change bhaye vhane pani refrence bata change hunxca..

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "anil@google.com"

console.log(userone.email)
console.log(usertwo.email);
