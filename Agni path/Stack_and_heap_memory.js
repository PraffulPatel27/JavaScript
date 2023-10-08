// ************* Stack and Heap memory **************

// +++++  memory used for primitive data types +++++++ 

// While declaring a variable , we get copy of that variable 
//in stack memory

let myvariable = "TechGyanSpacedotCom"

let anothername = myvariable
anothername = "NowChanges"   // Changes only on variable 

console.log(myvariable);
console.log(anothername);


//+++++++  Heap memory used for Non-primitive data types +++++++ 

// While declaring a variable , we get reference of that variable

let Userone = {
    email: "prafful!23@google.com",
    name: "Prafful",
}

let userTwo = Userone
userTwo.email = "new@gmail.com"  // Changes on original object  

console.log(Userone.email);
console.log(userTwo.email);
