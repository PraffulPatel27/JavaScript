// ******** JS Functions ********

function sayMyName () {
    console.log("Hello, I am prafful");
}

sayMyName    //it is just a reference to the function
sayMyName()  //it will call the function


// ***** Add two numbers ***** \\
function addTwoNumbers (number1, number2) {  
// +++++++++ Here number1 and number2 are parameters +++++++ 

    console.log(number1 + number2);
}

addTwoNumbers()     //NaN (Not a Number)
// Because we are not passing any value to the function

addTwoNumbers(10, 20)   //30
// +++++ Here 10 and 20 are arguments +++++++


// ******* Store result of function *******
function multiplyTwonumbers (num1, num2) {
    console.log(num1 * num2);
}
const answer = multiplyTwonumbers (2, 3)
console.log('Result: ', answer);         // Undefined
// Because we are not return any answer, we only printing
// thats why it gives undefined


function DivideTwoNumbers (nums1, nums2) {
    // let result = nums1 / nums2
    // return result
    return nums1 / nums2

    console.log('Print please.........');
    // This console not work because function alreasy return 
}
const result = DivideTwoNumbers (10, 5)    // here function return answer
console.log('Division: ', result);   
 


// ****** Check user LoogedIn *******
function loginUserMessage (username) {
    return `${username} just logged in`
}

console.log(loginUserMessage ("Prafful"));
console.log('Empty parameters : ',loginUserMessage ());   // Undefined
//While not passing any value, it gives Undefined


function loginUser2Message (username) {
    // if (username === undefined) {
    //     console.log('Please enter a username');
    //     return
    // }

    // if (undefined) {  //false
    //     console.log('Please enter a username');
    //     return
    // }

    if (!username) {   // false
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}
console.log(loginUser2Message('WelCome'));


// ******** Assign value on parameters when no 
//    such values are passed

function loginUser (username = "Spot") {
    if (username === undefined) {
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}
console.log(loginUser ('NotNow!!'));   
// when passing value then it will use, Otherwise
// Function passed value used
console.log(loginUser ());
 