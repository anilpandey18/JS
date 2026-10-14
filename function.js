
function sayABCD(){
console.log("A");
console.log("B");
console.log("C");
console.log("D");
}

// sayABCD     yo autaa Reference marta bhayo

// sayABCD()

function addTwoNumbers(number1, number2){        // Function banauda define gareko variable. yesmaa number 1 raa number 2 bhayo..
      console.log(number1 + number2);
}

addTwoNumbers(3, 4)   // Function call garda pathayeko actual value. yesma 3 ra 4 bhayo.


function addTwoNumbers(number1, number2){       
    //   let result = number1 + number2
    //   return result
    return number1 + number2  // yo pani autaa tarika ho..
}

const result = addTwoNumbers(3, 4) 
// console.log(result);


function loginUserMessage(username = "Sups"){
    if(!username){                   // if (username === undefined ra yo bhan nu autai ho !)
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in `  
}

console.log(loginUserMessage("Bishal"))




///// Function With Objects //////////



function calculateCartPrice(...num1){
     return num1
}

console.log(calculateCartPrice(200, 400, 500, 700, 600))


const user = {
    username: "Anil",
    prices: 199
}

function handleobject(anyobject){
      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)
handleobject({
    username: "Anil",
    price: 499
})



const myNewArray = [200, 400, 100, 600]

function returnsecondValue(getArray){
    return getArray[1]
}

// console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([200, 400, 500, 600]));