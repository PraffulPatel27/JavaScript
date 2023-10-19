// ********* Important Question *********

//Browser execution environment this value is window object
//Node execution environment this value is global object

// Global Execution Context always do no matter value is assigned or not


// ********* Execution Context *********

//1. Global Execution Context
//2. Functional Execution Context
// 3. Eval Execution Context (little IMP)


// ***** Global Execution Context *****

let val1 = 10
let val2 = 5
function addNum (num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(20, 30)

console.log(result1);
console.log(result2);

// -< global execution context - this
// -< Memory Phase
   // --< Variable assign undefined

// -< Execution Phase
    // --< Variable assign value
    // --< Function (creating new execution environment)
        // --< (New variable environment + Execution thread)
            // ---< Memory Phase
            // ---< Execution Phase
            // ---< Return to global execution context
            // ---< After using variable environment destroy or delete

    // -< Again function (creating new execution environment)
        // --< (New variable environment + Execution thread)
            // ---< Memory Phase
            // ---< Execution Phase
            // ---< Return to global execution context
            // ---< After using variable environment destroy or delete

//  -< After using variable environment destroy or delete



// ************* Call Stack *************

function  one() {
    console.log('One')
    two()
}
function  two() {
    console.log('Two')
    three()
}
function  three() {
    console.log('Three')
}

one()
two()
three()

// ++++++ LIFO (Last In First Out) ++++++


//   *             *
//   *             *
//   *             *
//   *   three ()  *
//   *   two ()    *
//   *   one ()    *
//   * * * * * * * *

