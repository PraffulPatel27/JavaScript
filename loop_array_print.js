// Print arrays using loop

let array = ["item1", "item2", "item3", "item4", "item5"];;
console.log(array.length);

for (let i=0; i<array.length; i++)
{
    console.log(array[i]);
}

let newarr = [];
for (let i=0; i<array.length; i++)
{
    newarr.push (array[i].toUpperCase());
}

console.log(newarr);