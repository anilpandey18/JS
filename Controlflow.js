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




//  // JavaScript Control Flow Practice

// // 1. If-Else Statement
// const studentMarks = 76;

// if (studentMarks >= 80) {
//     console.log("Grade: A");
// } else if (studentMarks >= 60) {
//     console.log("Grade: B");
// } else if (studentMarks >= 40) {
//     console.log("Grade: C");
// } else {
//     console.log("You failed");
// }

// // 2. Logical Operators
// const isLoggedIn = true;
// const hasMembership = true;

// if (isLoggedIn && hasMembership) {
//     console.log("Premium access granted");
// } else {
//     console.log("Access denied");
// }

// // 3. OR Operator
// const loginWithEmail = false;
// const loginWithGoogle = true;

// if (loginWithEmail || loginWithGoogle) {
//     console.log("Login successful");
// } else {
//     console.log("Please log in");
// }

// // 4. Switch Case
// const dayNumber = 5;

// switch (dayNumber) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// // 5. Truthy and Falsy Values
// const username = "";

// if (username) {
//     console.log("Username is available");
// } else {
//     console.log("Username is empty");
// }

// // 6. Check Empty Array
// const cartItems = [];

// if (cartItems.length === 0) {
//     console.log("Your cart is empty");
// } else {
//     console.log("Items found in cart");
// }

// // 7. Check Empty Object
// const student = {};

// if (Object.keys(student).length === 0) {
//     console.log("Student object is empty");
// } else {
//     console.log("Student data found");
// }

// // 8. Nullish Coalescing Operator
// const userAge = null;
// const finalAge = userAge ?? 18;

// console.log("User age:", finalAge);

// // 9. Ternary Operator
// const productPrice = 150;

// productPrice <= 100
//     ? console.log("Affordable product")
//     : console.log("Expensive product");

// // 10. Nested If Statement
// const accountBalance = 2000;
// const withdrawalAmount = 500;
// const pinCorrect = true;

// if (pinCorrect) {
//     if (withdrawalAmount <= accountBalance) {
//         console.log("Withdrawal successful");
//     } else {
//         console.log("Insufficient balance");
//     }
// } else {
//     console.log("Incorrect PIN");
// }

// // 11. Check Even or Odd
// const number = 17;

// if (number % 2 === 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }

// // 12. Optional Default Value
// const displayName = undefined;
// const nameToShow = displayName ?? "Guest";

// console.log(`Welcome, ${nameToShow}!`);


