//****** Datatypes JS *******/

//**** Primitive datatype ****

let num = 20;
console.log(typeof num);  //number

let str = "Parag";
console.log(typeof str);  //string


//*****  normal int  *****/

let myNumber = 123;
console.log(myNumber);
//** Max int of let **/
console.log(Number.MAX_SAFE_INTEGER);   //9007199254740991


//******** Big int *******/  
//***** come in 2020  *****


//Method 1
let Numbert = BigInt(1234764982042435793246523649024565394);
console.log(Numbert);

let Numbert2 = BigInt(12);
console.log(Numbert2);

//Methd 2
let Numbert3 = 12345n;
console.log(Numbert3);

console.log(Numbert2 + Numbert3);   //Anser in Bigint 
let Numbert4 = 123;
// console.log(Numbert3 + Numbert4); 
//*** It gives error because Bigint always perform operation with Bigint not with other datatype */


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


//****** Booleans & comparison operator ******/

//booleans have either true or false

let num1 = 6;
let num2 = 8;
console.log(num1>num2);  //false

let num3 = 10;
let num4 = 10;
console.log(num3>=num4);  //true

let num5 = 5;
let num6 = 7;
console.log(num5<=num6);  //true


//****  == VS ===  ****/
console.log(num1 == num2)  //false  
console.log(num3 == num4); //true

let num7 = "12";
let num8 = 12;
console.log(num7 == num8); //true //** It check only value not datatype and it is only on Javascript **/

console.log(num7 === num8);  //false  //** It check value and datatype both and it is only on Javascript **/


//****  != VS !==  ****/
console.log(num1 != num2)  //true
console.log(num3 != num4); //false

console.log(num7 != num8); //false  //** It check only value not datatype and it is only on Javascript **/
let num9 = "7";
let num10 = 8;
console.log(num9 != num10); //true  //** It check only value not datatype **/


console.log(num1 !== num2)   //true
console.log(num3 !== num4);  //false
console.log(num7 !== num8);  //true  //** It check value and datatype both  **/
let num11 = "7";
let num12 = "7";
console.log(num11 !== num12); //false  //** It check value and datatype both  **/

