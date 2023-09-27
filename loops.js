// **** Loops ****

//** While loop **/

// 0 to 9 print
let i=0;
while (i<10) {
    console.log(i);
    i++;
}
console.log(`current value of i is ${i}`);

// sum of 1 to 10 natural number
let num = 10;
let sum = 0;
while (num != 0)
{
    sum+= num;
    num--;
}

let num2 = 11
let total = (num2*(num2+1))/2;
console.log(`sum of 1 to 10 natural number is ${sum}`);
console.log(`Without while loop sum is ${total}`);


//** for loop **/

// for (let j=0; j<=9; j++)
// {
//     console.log(j);
// }
// console.log(j);  //gives error because scope of j is local

let k=0;  //global scope
for (; k<=9; k++)
{
    console.log(k);
}
console.log(k);

for (var j=0 ; j<=9; j++)
{
    console.log(j);
}
console.log(j);  //While using var it gives output because scope of j is global

