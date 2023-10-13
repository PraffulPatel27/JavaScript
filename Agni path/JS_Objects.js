// **************** Objects ****************

// singleton

// object literals
// Object.create     // using constructor

const mysym = Symbol("Key1")
const mysym2 = Symbol("Key2")

const jsuser = {
    name: "Prafful",
    "full name": "Prafful Patel",
    mysym: "mykey1",        // normal key
    [mysym2]: "mykey12",      // act as a key (best way to use symbol)
// When we want to use symbol as a key we need to use [] bracket

    age: 20,
    location: "Bhopal",
    email: "vscode@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);     // it is best practice to print object 

console.log(jsuser.mysym);
console.log(typeof jsuser.mysym);     // string

console.log(jsuser[mysym2]);       // It is right way to use symbol as a key
console.log(typeof jsuser.mysym2);


// ************ Update object values ************ \\
jsuser.email = "Prafful@chatGpt.com"

// ************ Freeze Objects values ************ \\ 
Object.freeze(jsuser) 
jsuser.email = "Prafful@Microsoft.com"
console.log(jsuser);

// ************ JS Functions ************ \\

const newobj = {
    name: "JAvaScript"
}

newobj.greetings = function() {
    console.log("Hello, I am Prafful");
}

newobj.greetingstwo = function() {
    console.log(`Hello, I am ${this.name}`);   // this keyword is used when same object want to referenced
}

// console.log(jsuser.greetings);    // undefined
console.log(newobj.greetings());    // Hello, I am Prafful
console.log(newobj.greetingstwo());  

