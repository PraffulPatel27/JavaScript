// ++++++++++ Arrays +++++++++

const marvel_heroes = ['Iron man', 'Captain America', 'Thor', 'Hulk', 'Black Panther', 'Spiderman']
const dc_heroes = ['Superman', 'Flash']

// console.log(marvel_heroes)
// marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);


   // ++++ Concat ++++
const newarr = marvel_heroes.concat(dc_heroes)
console.log('Concat method ',newarr);


   // ++++ Spread Operator ++++
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log('Spread method ',all_new_heroes);


    // ++++ flat ++++
// Return new array with all subarray elements concatenated 
// into it recursively up to the specified depth
const another_array = ['Hello', 'World', ['I', 'am', 'Ironman'] , 'I', ['am', ['Batman'] ] ]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


    // ++++ isArray ++++
console.log(Array.isArray("Prafful"));


    // ++++ from ++++
// convert string to array
console.log(Array.from("Prafful"));


    // ++++ keys array ++++
/* Important */
console.log(Array.from({name: 'Prafful', age: 20}));  
// when it dose not find any array it return empty array
// we need to tell use keys to make array


    // ++++ of ++++
// Create array from arguments like variables, strings, etc 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

