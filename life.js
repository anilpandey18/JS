// Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()

// IIFE le variables lai local scope ma rakhera global scope pollution ghatauna help garcha.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

// yai case aaba aarow function ma heram.. kaile kaso yadi mathi ;(Semicolon) na bhaye talaa function maa error aauna sakxa.. 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('anil')