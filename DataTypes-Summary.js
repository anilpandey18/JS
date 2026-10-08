//  primitive

// 7 types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3



const isLoggedIn = false 

const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 3652532526753362535238n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myobj = {
    name:"anil",
    age:20,
}

const myFunction = function (){
    console.log("Hello World");
}

console.log(typeof myFunction)