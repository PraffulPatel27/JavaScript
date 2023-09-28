// ******* Arrays *******

// *******   ordered collection of items   *******
let fruits = ["aaple", "mango", "orange", "grapes"];
console.log(fruits);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let mixed = [1,2,3,4, "string", null, undefined];
console.log(mixed);


// ---- / mutable the array (change the value of original array) / ----
let test = ["first", "second", "third"];
console.log(test);
test[1] = "something";
console.log(test);

// **** Checking type of array *****
console.log(typeof test);

//to check if it is an array or not
console.log(Array.isArray(test));

//*****  object literal *****
let obj = {};
console.log(typeof obj);
console.log(Array.isArray(obj));

// *** array push and pop *** 

//** push **
fruits.push("nothing");   //push at the end
fruits.push("banana");
console.log(fruits);

// ** pop **
console.log(fruits.pop());   //remove from the end
console.log(fruits);


// ******  unshift and shift  *****

// ** unshift **
fruits.unshift("kiwi");   //push at the beginning
console.log(fruits);

// ** shift **
console.log(fruits.shift());   //remove from the beginning
console.log(fruits);


// Question: Which is faster? push/pop or shift/unshift?
// Answer: push/pop is faster than shift/unshift, because when you use
//         shift/unshift, you have to reindex everything in the array and while 
//          using push/pop, you don't have to reindex anything.
