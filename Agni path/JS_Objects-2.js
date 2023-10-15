// *********** JS Object - 2 ***********

// **** Singleton Objects **** \\

const tinderUSer = new Object()   
// Using new keyword we can create object and also 
// using Object() constructor
console.log(tinderUSer);   // {}


// **** Non Singleton object **** \\

// using object literal
const tinderUSer2 = {}   
console.log(tinderUSer2);   // {}


tinderUSer2.id = "123abcd"
tinderUSer2.name = "Prafful"
tinderUSer2.isLoggedIn = false

console.log(tinderUSer2);


// ********* Nested Objects ********* \\

const firstobj = {
    firstname: "Java",
    lastname: "Script",
    Programming: {
        Language: {
                name: "JS",
                version: "ES6"
            }
    }
}
 
// **** Accessing nested objects **** \\
console.log('Nested objects accessing ', firstobj.Programming.Language.name);

// **** Printing all values of nested object **** \\
console.log('all values printing ', firstobj);


// ********** Merge two or more objects ********** \\

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}


// ******** Method 1 ******** \\
const obj3 = {obj1 , obj2}
console.log(obj3);
// Output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


// ******** Method 2 ******** \\
const obj4 = Object.assign ({}, obj1, obj2)
// { } it is optional, we write this only for better understanding
console.log(obj4);
// We assume {} as a target object and obj1, obj2 as a source object


// ******** Method 3 ******** \\
const obj5 = {...obj1, ...obj2}
// Using spread operator
console.log(obj5);



// **************** Accessing Objects Data **************** \\
console.log(tinderUSer2);

// +++++ access key +++++ \\
console.log(Object.keys(tinderUSer2));

// +++++ access values +++++ \\
console.log(Object.values(tinderUSer2));


// +++++ access key and values +++++ \\
console.log(Object.entries(tinderUSer2));
// Here first is key and second is value it is in array format


// ****** Key is present or not ****** \\
console.log(tinderUSer2.hasOwnProperty ('name'));  // true

console.log(tinderUSer2.hasOwnProperty ('age'));  // false

