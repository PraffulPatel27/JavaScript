// ********* JS functions-2 *********

// *** we need to pass multiple values in function ***
function calculatePrice (num) {
    return num
}
console.log(calculatePrice (10, 20, 30, 40, 50));

// We use rest operator to pass multiple values 
//  or it is also called as spread operator

function calculatePrice2 (...nums) {
    return nums
}
console.log(calculatePrice2 (10, 20, 30, 40, 50));


// Q1. What output will be of below code?
function calculateCartPrice (val1, val2, ...nums) {
    console.log(nums);
    console.log('val1 ',val1);
    console.log('val2 ',val2);
}
console.log(calculateCartPrice (200, 400, 500, 2000));
// first two values are assigned to val1 and val2
//  then rest of the values are assigned to nums



// *********** Objects pass in Functions ***********
const Mall = {
    Item: "Cycle",
    price: 5000
    //prices: 5000   // Undefined
}

function handleSale (anyObject) {
    console.log(`Item name is ${anyObject.Item} and price is ${anyObject.price}`);
}

handleSale (Mall)


// ********* Array pass in Functions *********

const myNewArray = [10, 20, 30, 40, 50]

function returnSecondValue (getarray) {
    return getarray[1]
}
console.log(returnSecondValue (myNewArray));
console.log(returnSecondValue ([100, 500, 800, 10000]));
