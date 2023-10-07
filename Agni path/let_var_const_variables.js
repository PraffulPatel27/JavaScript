// let , var and const

const accountId = 5461234
let accountEmail = "www.google.com"
var accountPassword = "123456"
accountCity = "Indore";
let accountState;

// accountId = 123456;  ****** changes not allowed ******
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

accountEmail = "www.gmail.com";
accountPassword = "123456789";
accountCity = "Bhopal";


// ******** Prefer not to use var because
//   of issue in block scope and functional scope *****  

console.table([accountId, accountEmail, accountPassword, accountCity]);
