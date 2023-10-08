// ****** Strings ******

const name = "Prafful";
const age = 21;

console.log(`Hello my name is ${name} and my age is ${age}`);

const html = new String(`HElloWorld!`)
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.__proto__);

console.log(html.charAt(2));
console.log(html.indexOf('World'));

const newString = html.substring(0 , 5)
console.log(newString);

const newanotherString = html.substring(-12 , 7)   // It start with 0
console.log(newanotherString);

const anotherString = html.slice(0 , 7)
console.log(anotherString);

const anothernewString = html.slice(-12 , 6)
console.log(anothernewString);

const firststring = "         Hello World!           "
console.log(firststring);
console.log(firststring.trim());

const url = "https://www.google/fdsfsfh%fndjs.com"
console.log(url.replace('%f', '-'));               // replace where it found

const newurl = "https://www.google/%fdsfsfh%fndjs.com"
console.log(newurl.replace('%f', '='));    

console.log(url.includes('google'));       // That string is present or not

console.log(newurl.includes(',com'));

const abstr = "my Codechef"
console.log(abstr);
console.log(abstr.split('-'));              // split the string
