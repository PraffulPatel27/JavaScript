//******* String Method  ********/

//***** trim () *****
let fsName = "   Pankaj    ";

console.log(fsName.length);
fsName.trim();              //**** spaces are not trim on original string it make copy and then change because strings are immutable *******/
console.log(fsName.length);

let newstring = fsName.trim();
console.log(newstring);
console.log(newstring.length);

fsName = fsName.trim();
console.log(fsName , fsName.length);

//**** toUpperCase() ****/
let fname = "ramkumar";
fname.toUpperCase();     //**** It makes copy because strings are immutable ******/
console.log(fname);

fname = fname.toUpperCase();
console.log(fname);

console.log(fname.toUpperCase());

//**** toUpperCase() ****/
let nname = "HRITIK";
nname.toLowerCase();
console.log(nname);

nname = nname.toLowerCase();
console.log(nname);

console.log(nname.toLowerCase());

//******* slice() *******/
let newsstring = fname.slice(0, 3);  //** It last index using index-1  ****/
console.log(newsstring);

let substring = nname.slice(1);
console.log(substring);     //string after from 1 index to the end index 
