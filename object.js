// SingleTon 
// object.create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Anil",
    [mySym]: "mykey1",
    age: 20,
    location: "Butwal",
    email: "anilpandey9090@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "anilpandey0000@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "anilpandey111@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
