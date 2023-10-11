// +++++++++ Arrays +++++++++

// In arrays similar and non similar data can be stored in a single variable
// arrays are resizeable
const myarr = [0, 1, 2, 3, 4, 5]
const myheroes = ['Ironman', 'Thor', 'Captain America', 'Hulk', 'Black Panther', 'Spiderman']
console.log(myarr[0], myarr[2]);
console.log(myheroes);


//*********** Arrays Methods *************/

   // ++++ Push ++++
myarr.push(6);      // Add element at the end of the array
myarr.push(7);


    // ++++ Pop ++++
console.log(myarr.pop());      // Remove element from the end of the array
console.log(myarr);

    
    // ++++ Unshift ++++
myarr.unshift(-1);      // Add element at the start of the array
// remaining elements will shift to right
myarr.unshift(-2)
console.log(myarr);


   // ++++ Shift ++++
myarr.shift();      // Remove element from the start of the array
console.log(myarr);


   // ++++ Inlcudes ++++
console.log(myarr.includes(5));    //true   
// Check element is present in array or not

console.log(myarr.includes(12));   //false


   // ++++ IndexOf ++++
console.log(myarr.indexOf(5));     // 6  
// Check element index in array and return index


   // ++++ Join ++++
const newarr = myarr.join()

console.log(myarr);
console.log(typeof myarr);

console.log(newarr)
console.log(typeof newarr);


    // ++++ Slice ++++

console.log("A ", myarr);

const myn1 = myarr.slice (0, 4)         // gives subarray 
console.log('Using slice method ',myn1);

console.log("B ", myarr);


    // ++++ Splice ++++

const myn2 = myarr.splice(0, 4)          // remove subarray elements
console.log('Using splice method ',myn2);
console.log("C ", myarr);




