// ****** for of loop ******

const myArray = [1, 2, 3, 4, 5];
for (const i of myArray) {
    console.log(i);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}



// ******* Map *******

// Maps store uniquq values of any type and follow input order
const map = new Map()
map.set(1, 'One')
map.set(2, 'Two')
map.set(3, 'Three')
map.set(4, 'Four')
map.set(5, 'Five')

map.set(1, 'One')    // It will not add duplicate values
 
console.log(map);

for (const [key, value] of map) {
    console.log(`Key is ${key} :- Value is ${value}`)
}


// ********* for in loop *********

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA',
    JS: 'JavaScript',
    swift: 'ruby',
    cpp: 'C++',
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); 
}
    
// Not used for obgjects

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(`${key}th index value is ${programming[key]}`);
}


const newmap = new Map()
map.set(1, 'One')
map.set(2, 'Two')
map.set(3, 'Three')
map.set(4, 'Four')
map.set(5, 'Five')

// This loop will not work with map because map is not iteratorable
for (const key in newmap) {
    console.log(newmap[key]);
}



// ********* for each loop *********

const coding = ["js", "ruby", "pytho", "java", "cpp"]

//********** Method 1 **********
coding.forEach( function (item) {
    console.log(item);
})
// This function is call back thats why it does not have name


//********** Method 2 **********
coding.forEach ( (value) => {
    console.log(value);
})


//********** Method 3 **********
function printme (val) {
    console.log(val);
}

coding.forEach (printme)
// We don't need to call function in forEach loop because
//  reference are automatically passed


  // for each loop have more parameters
coding.forEach ( (item, index, arr) => {
    console.log(item, index, arr);
})

// Every index have whole array access



// ********* Example *********

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

mycoding.forEach ( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})


