// **** Conversion Operation ****

let score = 33;
console.log(typeof score); // number
console.log(typeof (score)); // number

score = "33";
console.log(typeof (score));
let valueIntNumber = Number(score);
console.log(typeof valueIntNumber); // number

score = "123abs";
console.log(typeof (score));
valueIntNumber = Number(score);
console.log(typeof valueIntNumber);  // number
console.log(valueIntNumber);   // NaN  (Not a Number)

score = null;
console.log(typeof (score));  // object
valueIntNumber = Number(score);
console.log(typeof valueIntNumber);  // number
console.log(valueIntNumber);  // 0

score = undefined;
console.log(typeof (score));  // undefined
valueIntNumber = Number(score);
console.log(typeof valueIntNumber);  // number
console.log(valueIntNumber);  // NaN

score = true;
console.log(typeof (score));   // boolean
valueIntNumber = Number(score);
console.log(typeof valueIntNumber);  // number
console.log(valueIntNumber); // 1

score = "prafful";
console.log(typeof (score));   // string
valueIntNumber = Number(score);
console.log(typeof valueIntNumber);  // number
console.log(valueIntNumber);   // NaN

// "33" => 33
// "123abs" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let bool = Boolean(isLoggedIn);
console.log(typeof bool);  // boolean
console.log(bool); // true

isLoggedIn = "";
bool = Boolean(isLoggedIn);
console.log(typeof bool);  // boolean
console.log(bool);  // false
 
isLoggedIn = "prafful";
bool = Boolean(isLoggedIn);
console.log(typeof bool);  // boolean
console.log(bool);  // true

// 1 => true; 0 => false
// "" => false; 
// "prafful" => true

let num = 10;
let string = String(num);
console.log(typeof string);  
console.log(string);  