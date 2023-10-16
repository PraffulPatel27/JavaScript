//****** Global and local scope ******//

var a= 10;
let b= 20;
const c= 30;

console.log(a);
console.log(b);
console.log(c);


// ** Now checking scope of variables **

/* Inside if it is a block scope */
/* Outside if it is a global scope */

if (true) {
    // var a= 100;
    a = 1000;
// Var is global variable that's why it will update
//  the value of a and it is not recommended to 
//    use var

    let b= 200;
    const c= 300;

    console.log('Inner let value ', b);
    console.log('Inner const value ', c);
}

console.log('Var a updated ',a);   //It will update the value of a
console.log('Global let value ', b);     //It will not update the value of b
console.log('Global const value ',c);     //It will not update the value of c


// Q1. Is it any difference between scopes on browser console and node console?
//Ans. In browser console and node console scopes are different
