// *************** Reduce method ***************

// ** Used on shooping cart for adding total price of items ** 
const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce (function (accumualtor, currentValue) {
    console.log(`accumulator : ${accumualtor} and currentValue : ${currentValue}`);
    return accumualtor + currentValue
}, 0)
// we pass 0 as initial value of accumulator
// accumulator take value only first time after that it take value of previous iteration
// We can also pass initial value of accumulator as 10

console.log('sum : ',myTotal);



// Using arrow function with reduce method

const totalvalue = myNums.reduce ( (acc, curl) => ( acc + curl ), 0)

console.log('use arrow function with reduce method : ', totalvalue);




// **** Example of shopping cart ****
const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "Web dev",
        price: 999
    },
    {
        itemName: "Data structure",
        price: 5000
    },
    {
        itemName: "Full stack",
        price: 10000
    },
    {
        itemName: "Java",
        price: 4500
    },
]

// Add all prices of items in shopping cart
const priceTopay = shoppingCart.reduce ( (acc, item) => acc + item.price, 0)

console.log('Total price of items :', priceTopay);