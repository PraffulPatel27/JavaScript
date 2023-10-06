// Use const for creating array

const fruits = ["apple", "mango"];
fruits.push("banana");

// fruits = ["orange", "grapes"]; // TypeError: Assignment to constant variable.
fruits[0] = "orange"; // This is allowed
console.log(fruits);
