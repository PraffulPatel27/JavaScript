// ********* this keyword in arrow function *********

const user = {
    username: "Prafful",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // when we want ot refer current context we use this keyword
        // console.log(this);    // Give the current data
        // this keyword refers to the current context
    }
}

// user.welcomeMessage ()
// user.username = "Harsh"
// user.welcomeMessage()

console.log(this);
// This weill give empty while running in node
// But in browser it will give window object
// the global object in browser is window



// ************ Arrow function ************

function chai () {
    // console.log(this);
    let username = "Prafful";
    console.log(this.username);

    // this keyword is not used in function
    // It is used in object
}

chai ()   // Undefined

const chaih = () => {
    let username = "Prafful";
    console.log(this.username);
}

chaih ()   // Undefined

// *** Arrow function hold in variable ***
const addTwo = (num1, num2) => {
    return num1 + num2;
}
// While using '{} or curly braces we need to return something 

console.log(addTwo (2, 3));   // 5 

// *** Another way ***
const addThree = (num1, num2, num3) => (num1 + num2 + num3);
// If we have only one line in function then we can write like this
// while using paranthesis we don't need to return something

console.log(addThree (2, 3, 2));  // 7


// const addtemp = (num1, num2) => {username: "Prafful"};  // Undefined
const addtemp = (num1, num2) => ({username: "Prafful"});
// While returning object in arrow function we need to wrap it in () paranthesis

console.log(addtemp(3, 4));   // 3 4


// *** Allows synatx ***

const Array = [2, 4, 3, 9, 8]

// Array.forEach (function () {})
// Array.forEach (() => ())  //arrow function
// Array.forEach()
