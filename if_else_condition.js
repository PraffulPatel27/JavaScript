//******* If else condition *******/

let age = 19;

if (age >= 18)
{
    console.log("user can play pubg game");
}
else {
    console.log ("user can play mario game");
}

//******* check even or odd *******/

let num = 14;

if (num%2 === 0)
{
    console.log("number is even");
}
else{
    console.log("number is odd");
}


//**** truthy and falsy values ******/

// falsy values

// false
// ""
// null
// undefined
// 0

// let firstName = "";
// let firstName = false;
// let firstName = 0;
// let firstName = null;
let firstName = undefined;

if (firstName)
{
    console.log(firstName);
}
else {
    console.log("firstName is kind a falsy empty");
}


// ***** truthy values ****

// let rightName = "poorvi";
// let rightName = 1;
let rightName = -1


if (rightName)
{
    console.log(rightName);
}
else {
    console.log("firstName is kind a falsy empty");
}
