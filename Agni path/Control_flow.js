// ********* Control flow or logic flow *********

// ***** if else statement *****
// < , > , <= , >= , == , === , != , !== 

// if (2 == "2") {   // true
//     console.log('Executed');
// }

// if (2 === "2") {     // false
//     console.log('Executed');
// }
// else {
//     console.log('Not Executed');
// }


// ****** ( !=== ) or ( !== ) ******

if (2 !== "2") {    // true
    console.log('Executed');
}
else {
    console.log('Not Executed');
}


// **** Block Scope ****
const score= 200

if (score > 100) {
    // var power = "teleport"  
    //var is not block scope      
    // var having global scope

    let power = "teleport"
    // const power = "teleport"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); 
// After usign let and const we can't access
//   variable outside of block scope


// ***** Implicit scope *****

const balance = 500
if (balance > 200) console.log("test");

// We can write more than one statement in one line using comma (,)
if (balance > 300) console.log("testing"), console.log("test2");
// It is bad practice to write more than one statement in one line


const userLoogedIn = true
const debitCard = true
const loggedInFromGoogle = false

if (userLoogedIn && debitCard ) {
    console.log("Allow user to make purchase");
}

if (loggedInFromGoogle || debitCard) {
    console.log('allow user to buy product');
}


// ******** Switch Statement ********

// switch (key) {
//     case value:
//         break;
    
//     default:
//         break;
// }

const month= 3
switch (month) {
    case 1:
        console.log("Januaray");
        break;
    case 2:
        console.log("Febuaray");
        break;
    case 3:
        console.log("march");
        break;
    // If we don't use break then it will 
    //  execute all case except default case
    
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;  
}



// ***** truthy and falsy value *****

// ** Falsy value **
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ** Truthy value **
// like "0", 'false', " ", [], {}, function() {},  all other value except falsy value



// const userEmail = "p@technology.ai"  // truthy value
// If string have some value then it is truthy value
const userEmail = "" 
// If empty string then it is falsy value

if (userEmail) {   // true
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

//********* Empty Array *********

const temp = []
if (temp) {     // true
    console.log("Got temp email");
}

if (temp.length === 0) {    //true 
    console.log("Array is empty");
}


// ******** Empty Object ********

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// ******** Conditionals statement question ********

// false == 0   // true
// false == ''  // true
// 0 == ''      // true



// ****** Nullish Coalescing Operator (??): null undefined ******
/* It is used to reduce get null or undefined whenever we have some values  */

let val = 5 ?? 10
let val1 = null ?? 10
let val2 = undefined ?? 15
let val3 = null ?? 40 ?? 50 ?? 80

console.log(val);   // 5
console.log(val1);  // 10
console.log(val2);  // 15

console.log(val3);  // 40
// It will return first value which is not null or undefined



// ******** Ternary Operator ********

// codition ? true : false

const IceCreamPrice = 100

IceCreamPrice <= 120 ? console.log("I will buy Ice Cream") : console.log("I will not buy Ice Cream");

