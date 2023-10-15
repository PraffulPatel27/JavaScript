// ********* Object De-Structuring *********

const course = {
    name: "JavaScript",
    duration: "2 months",
    price: "free"
}

// ****** Method 1 ****** \\
console.log(course.name);

// **** Another way **** \\
const {duration} = course

// When we need then we can use it multiple times
console.log(duration);


// We can also change the name of variable
const {duration: time} = course
console.log(time);
