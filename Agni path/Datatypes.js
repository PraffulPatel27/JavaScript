// *****  Primitive *****

// 7 types of primitive data types : String, Number, Boolean, 
//   Undefined, Null, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
constoutsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);  // false

let bigNumber = 1564512154415544725n
console.log(typeof bigNumber, bigNumber);  // bigint


// ***** Reference (Non primitive) *****

// Array, Objects, Functions

const gods = ['Ram', 'Shiv', 'Ganesh', 'Saraswati', 'laxmi'];

console.log(gods);
let myObj = {
    name : "Prafful",
    age : 21,
}

console.log(typeof myObj);


const myFunction = function () {
    console.log("Hello World");
}
 
console.log(typeof myFunction);