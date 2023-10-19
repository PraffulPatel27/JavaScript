// ******** While and do while ********

let index= 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index+= 2;
}

let MyArray = ["Ironman", "Thor", "Hulk", "Captain America", "Black Widow", "Hawkeye"]
let j = 0
while (j < MyArray.length) {
    console.log(`Value is ${MyArray[j]}`);
    j++
}


// *** do while *** 

// ***** It will execute atleast once *****

let score = 0;

do {
   console.log(`Score is ${score}`);
   score++;
} while (score <= 10)