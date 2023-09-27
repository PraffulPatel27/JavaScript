// ***** Nested if else *****

// winning number is 19
// 19 your guess is correct
// 17 too low
// 20 too high

let winningNumber = 19;
let userguess = prompt("Enter your guess number");  //prompt always take input as a string
console.log(userguess, typeof userguess); // 20 string

let userguess2 = +prompt("Enter your number");
console.log(userguess2, typeof userguess2); 

let newuserguess = Number(prompt("Enter your number"));
if (newuserguess === winningNumber) {
    console.log(winningNumber, "Your guess is correct!!");
}
else {
    if (newuserguess > winningNumber) {
        console.log(newuserguess, "too high");
    }
    else {
        console.log(newuserguess, "too low");
    }
}
