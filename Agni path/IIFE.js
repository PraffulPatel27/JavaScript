// ***** Immediately Invoked Function Expression (IIFE) *****  

// **** Named IIFE ****

(function chai () {
    console.log('Data Base Connected');
}) ();      
// We explicitly use Semicolon ';'


// **** Without Named IIFE ****

( (name) => {      // Passing parameter
    //Without name arrow function
    console.log(`DB Connected Two ${name}`);
}) ('Ramkumar')   //It takking as argument



// ****** Why we use IIFE *******

// 1. When we want to execute file immediately when it start 
// 2. When we don't want to pollute global variable 
// into function variables to remove this we use 
// IIFE and it also invoked immediately
