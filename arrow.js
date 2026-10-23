const user = {
    username: "anil",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to Website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "anil"
//     console.log(this.username);
// }
// chai()    // this. is only used in object not in function..

// const chai = function () {
//        let username = "anil"
//        console.log(this.username);
// }

// const chai = () => {
//        let username = "anil"
//        console.log(this);
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2   ..Implicit return means returning a value automatically from an arrow function without using curly braces {} and the return keyword.
// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4));

const addTwo = (num1, num2) => ({username: "anil"})

console.log(addTwo(3, 4));



// const myArray = [2, 5, 6, 8]
// myArray.forEach()



