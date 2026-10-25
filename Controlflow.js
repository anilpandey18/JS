// if

const isUserLoggedIn = true
const temperature = 41

// if( temperature < 50){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }

// const score = 200

// if (score > 100) {
//      const power = "fly"
//      console.log(`user power: ${power}`);
// }

//    console.log(`user power: ${power}`);


// const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2"); yo tarika ramro hoina garna ko lagi

// if(balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
    
// }

// const UserLoggedIn = true
// const debitcard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (UserLoggedIn && debitcard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("user logged in");
// }


                 /// Switch Case /////

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}


     /// Truthy and falsy value js //////

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values ///

// false, o, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length ===0) {
//     console.log("Array is empty");
// } else {
//     console.log("Array is not empty");
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


