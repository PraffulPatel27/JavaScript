//****** Primitive and Reference datatypes *******/

let num1 = 5;
let num2 = num1;
console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);
num1++;
console.log("After increment num1 ", num1);
console.log("value of num2 is ", num2);
//*** In stack memory, num1 and num2 are pointing to different memory location, so when we change the value of num1,
// *** value of num2 is not changed because both are pointing to different memory location ***

// ****** Reference datatypes *******
let arr1 = [1,2,3,4,5];
let arr2 = arr1;
console.log("value of arr1 is ", arr1);
console.log("value of arr2 is ", arr2);
arr1.push(6);
console.log("After add new value in arr1 is ", arr1);
console.log("value of arr2 is ", arr2);  
// *** In heap memory, arr1 and arr2 are pointing to same memory location, so when we change the value of arr1, 
// **** value of arr2 is also changed because both are pointing to same memory location ****
