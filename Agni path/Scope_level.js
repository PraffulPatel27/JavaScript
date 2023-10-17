// ******* Scope level *******

// +++ Closure +++

function one () {
    const username = 'John';

    function two () {
        const website = "youtube";
        console.log(username);

        // Function of child scope can access the variable of parent variable
    }
    // console.log(website);
    // Gives error because website is not defined in this scope
    // Parent scope can not access the variable of child scope

    two();
}

one();


// ***** Scoping in if else *****

if (true) {
    const username = "Prafful"
    if (username === 'Prafful') {
        const website = " Github";
        console.log(username + website);

        // Function of child scope can access the 
        //  variable of parent variable
    }

    // console.log(website);
    // website is not defined in this scope
}

// console.log(username);
// username is not defined in this scope



// ********* Interestiing *********

console.log(addone (7));

function addone (num) {
    return num + 1;
}

// addTwo (8)
// Cannot access 'addTwo' before initialization
// And we are holding the function in a variable

const addTwo = function (num) {
    return num + 2;
}

console.log(addTwo (8));