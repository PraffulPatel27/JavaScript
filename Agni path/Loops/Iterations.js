// ********* Iterations *********

// *** for loop ***
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

for (let i = 0; i <=5; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=5; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
}

for (let j=1; j <=10; j++) {
    for (let i=1; i<=10; i++) {
        console.log(`${j} * ${i} = ${i*j}`); 
    }    
    console.log();
}

let myArray = ["Flash", "batman", "superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}


//******* break and continue *******

for (let i = 0; i <=20; i++) {
    if (i ==5) {
        console.log('Detected 5');
        break;
    }
    console.log(`Value of i is ${i}`);
}

for (let j=1; j<=20; j++) {
    if (j == 5) {
        console.log('Detected 5');
        continue;
    }
    console.log(`Value of j is ${j}`);
}
