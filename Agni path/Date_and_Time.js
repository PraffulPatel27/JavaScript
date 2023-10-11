// ++++++++++++ Date and Time ++++++++++++

let myDate = new Date();
console.log(myDate);

console.log('toString ',myDate.toString());
console.log('toDateString ',myDate.toDateString());
console.log('toISOString ',myDate.toISOString());
console.log('toJSON ',myDate.toJSON());
console.log('toLocaleString ',myDate.toLocaleString());
console.log('toLocaleDateString ',myDate.toLocaleDateString());
console.log(typeof myDate);    //object

// let myCreateDate = new Date(2023, 0, 24)   // Month start from 0
// let myCreateDate = new Date(2023, 0, 24, 15, 4, 8)   //year, month, date, hour, minute, second
// let myCreateDate = new Date("2023-02-15")             //In yyyy-mm-dd format it will start from 1
let myCreateDate = new Date("04-15-2023")             // Mostly used format
console.log(myCreateDate.toLocaleDateString());
console.log(myCreateDate.toLocaleString());


// +++++++++++ Time +++++++++++++
// Use in while creating pools, games, quiz , etc

let myTimeStamp = Date.now();  
console.log(myTimeStamp);           // return time in millisecond
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);           // Normal date format
console.log('Current month ',newDate.getMonth() + 1);
console.log('Current date ',newDate.getDate());
console.log('Current full year ',newDate.getFullYear());

// '${newDate.getDay()}  and the time'

newDate.toLocaleString('default', {
    // To display all properties press ctrl + space
weekday: 'long',
// timeZone: 'india/kolkata',

})

//  formatMatcher: 'basic', 
//  hour12: true,
//  timeZone: 'UTC',
//  timeZoneName: 'short',
//  weekday: 'long',
//  year: 'numeric',
//  month: 'long',
//  day: 'numeric',
//  hour: 'numeric',
//  minute: 'numeric',
//  second: 'numeric'