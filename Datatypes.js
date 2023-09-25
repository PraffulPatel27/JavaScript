//****** Datatypes JS *******/

//**** Primitive datatype ****

let num = 20;
console.log(typeof num);  //number

let str = "Parag";
console.log(typeof str);  //string

//***** Convert number to string *****/

//Method 1 int to string
console.log(typeof num + "");   //gives number
console.log(typeof (num + ""));  //gives string 

num = num + "";
console.log('number to string - ', typeof num);   //"20"

//Method 2 int to string
let age = 18;
age = String(age);
console.log(typeof age , age);

//****** Convert string to number *******/

//Method 1 string to number
let mystr = +"1234";
console.log('string to number - ', typeof mystr);  

//Method 2 string to number
let mystring ="365";
mystring = Number(mystring);
console.log(typeof mystring , mystring);
