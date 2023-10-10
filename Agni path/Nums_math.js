// ******** Nums and Math ********

// const score = 400;
// console.log(score);

// const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString());    //convert int to string
// console.log(balance.toString().length);
// console.log(balance.toFixed(3));


// //Precision function 
// const NewNumber = 23.8966        // take 3 digit after decimal
// console.log(NewNumber.toPrecision(3));

// const OtherNumber = 123.8966;
// console.log(OtherNumber.toPrecision(3));

// const advnum = 1223.8966;
// console.log(advnum.toPrecision(3));

// const nums = 1000000
// console.log(nums.toLocaleString());      // US standard
// console.log(nums.toLocaleString('en-IN'));  //Indian standard 

// console.log(Number.MAX_VALUE);   // max value of number
// console.log(Number.MIN_VALUE);   // min value of number

// console.log(Number.MAX_SAFE_INTEGER);   // max safe value of number
// console.log(Number.MIN_SAFE_INTEGER);   // min safe value of number

// const n = 200
// console.log(Number.isInteger(n));   // check number is integer or not
//                                     // return true or false
// const str = "Integer" 
// console.log(Number.isInteger(str));


// ++++++++++++++++++ Maths +++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //Convert negative to positive

console.log('Round ',Math.round(8.4));
console.log('Round ',Math.round(8.8));

console.log('ceil ',Math.ceil(4.2));    //Value after decimal is greater or smaller it become greater
console.log('ceil ',Math.ceil(4.6));

console.log('floor ',Math.floor(4.9));  //Value after decimal is greater or smaller it become smaller
console.log('floor ',Math.floor(4.2));

console.log('Power function',Math.pow(2 , 3));

console.log('Square root',Math.sqrt(36));

console.log('Max value',Math.max(2,5,7,8,9,0));
console.log('Min value',Math.min(2,5,7,8,9,0));

const arr = [2,5,7,8,9,10, 100]
console.log(Math.max(...arr));

console.log('prit random number 0 or 1',Math.random());     //Generate random number between 0 to 1
console.log(Math.random() * 10);                            //Generate random number between 0 to 10
console.log((Math.random()*10) + 1);                        //Generate random number between 1 to 10 (to avoid getting 0 we add 1)

console.log('Dice numbers ',Math.floor(Math.random() * 6) + 1);   // We need single digit random number

const max = 20
const min = 10
console.log('Range number from 10-20 ',Math.floor(Math.random() * (max - min + 1)) + min);
