//***** Template string  ******/

//We need to print like this
let age = 22;
let firstName = "Rahul";

// "my friend name is Rahul and my friend age is 22"
let description = "my friend name is " + firstName + " and my friend age is " + age;
console.log(description);

// By using template string (``) we can print like this
let aboutMe =  `my friend name is ${firstName} and my friend age is ${age}`;
console.log(aboutMe);


//****** Undefined *******/

let firtName;
console.log(typeof firtName);  //gives undefined

var temp1;
console.log(temp1);  //gives undefined

// const remp;
// console.log(remp);   //gives error | const never blank


//****** Null  *******/
let myvariable = null;
console.log(myvariable);

myvariable = "Deepesh";
console.log(myvariable , typeof myvariable);

console.log(typeof null);  //gives object but it is not object it is a null and javascript error
