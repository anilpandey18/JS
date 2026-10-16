// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


// Block scope bhaneko { } bhitra declare gareko let ra const variable lai tei block bhitra matra access garna 
// milne scope ho.

// if (true) {
//     let age = 20;
//     const city = "Butwal";

//     console.log(age);  // 20
//     console.log(city); // Butwal
// }

// console.log(age);  // ReferenceError
// console.log(city); // ReferenceError

     // Global scope bhaneko variable lai program ko jun sukai thau bata access garna milne scope ho (rules anusar).

// let name = "rijan "

// function shoto() {
//     let name = "anil Pandey",
//     age = 20;
//     console.log(name);
//     console.log(age);
// }
// shoto();
// console.log(name);



// Student Attendance System  /////

let collegeName = "Crimson College";
let totalStudents = 50;

function checkAttendance() {
    let presentStudents = 42;

    if (presentStudents > 40) {
        let message = "Good Attendance";
        const percentage = (presentStudents / totalStudents) * 100;

        console.log(message);
        console.log("Attendance:", percentage + "%");
    }

    console.log("Present Students:", presentStudents);
}

checkAttendance();

console.log("College:", collegeName);
console.log("Total Students:", totalStudents);

// Test your scope knowledge
// console.log(presentStudents); // ReferenceError
// console.log(message);         // ReferenceError





