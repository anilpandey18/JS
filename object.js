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

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());




//////******************* Object Another part **********////////////////


// const tinderUser = new Object() // singleton object
const tinderUser = {

}

 tinderUser.id =  "123abc"
 tinderUser.name = "Anil"
 tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            fistname: "Anil",
            middlename: "prasad",
            lastname: "Pandey"
        }
    }
}
// console.log(regularUser.fullname.userfullname.fistname);

// Combine Two Object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "r", 6: "s"}

// const obj3 = { obj1, obj2} yesko output 2 otaa object xuttai xuttai aaunxa
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "anilpandey999@gmail.com"
    },
      {
        id: 1,
        email: "anilpandey999@gmail.com"
    },
      {
        id: 1,
        email: "anilpandey999@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // property xa ki chainaa bhane raa check garnaa pani milxa






