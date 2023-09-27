// ****** Operator ******

// *** ternary operator ***

// If we want to assign a value to a variable based on a condition
// example :
// It takes more lines of code
let age = 15;
let drink;

if (age >= 15) {
    drink = "coffee";
}
else {
    drink = "milk";
}

console.log(drink);

//*** using ternary operator ***/
let ages = 20;
let ans = ages>=18 ? "ellgibile" : "not eligible";
console.log(ans);


// ****** And Or operator ******

// ***  And operator  ***
let firstNames = "Manav";
let agess = 24;

if (firstNames[1] == "a" && agess >= 18) {
    console.log("user is eligible");
}
else {
    console.log("user is not eligible");
}

// ***  Or operator  ***
if (firstNames[2] == "m" || agess < 20) {
    console.log("Anyone");
}
else  {
    console.log("No one");
}


