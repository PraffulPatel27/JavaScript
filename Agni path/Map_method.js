//**************** Map method ****************

// Map method is used to modify the values of array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Add 10 to each value of array
// Without scope
const newNums = myNums.map ( (num) => num + 10)
console.log(newNums);

// With scope
const newNums2 = myNums.map ( (n) => {
    return n + 10
})
console.log(newNums2);



// *********** Chaining of methods ***********

// -------- Chaining of method work on opearation on values 
//we use chaining more times
let chains = [2, 4, 6, 8, 10]
const chainAns = chains.map( (change) => change * 2)
.map ( (change) => { return change + 10})

console.log('Chaining result : ',chainAns);


// ***** Chaining of methods with filter method *****
const chainAns2 = chains.map( (change) => change * 2)
.map ( (change) => { return change + 10})
.filter( (change) => change >= 25)

console.log('Chaining result when >= 25 : ',chainAns2);


 