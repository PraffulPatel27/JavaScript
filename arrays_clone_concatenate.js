//**** how to clone array ******

let array1 = ["item1", "item2"]; 
let array2 = array1; 

console.log(array1 === array2); // true
console.log(array1);
console.log(array2);

array1.push("item3");
console.log(array1);
console.log(array2);
// ** It is not cloning, it is just referencing the same array

// Method 1 - slice

let array3 = ["item1", "item2"]; 
let array4 = array3.slice(0);  //start from index 0 to end index

console.log(array3 === array4); // false
console.log(array3);
console.log(array4);


// Method 2 - concat

let array5 = ["item1", "item2"];
let array6 = [].concat(array5);

console.log(array5 === array6); // false
console.log(array5);
console.log(array6);


// Method 3 - spread operator

let array7 = ["item1", "item2"];
let array8 = [...array7];

console.log(array7 === array8); // false
console.log(array7);
console.log(array8);


// Make copy then add extra item

// M-1
let array9 = ["item1", "item2"];
let array10 = [].concat(array9, "item3");

console.log(array9 === array10); // false
console.log(array9);
console.log(array10);

// M-2
let array11 = ["item1", "item2"];
let array12 = [...array11, "item3", "item4"];

console.log(array11 === array12); // false
console.log(array11);
console.log(array12);

// To add items of two arrays
let array13 = ["item1", "item2"];
let last_array = ["item3", "item4", "item5"];

let array15 = [].concat(...array13, ...last_array);
console.log(array15);
console.log(array13);