//***************** Filter Method *****************

// --- filter method works on true or false condition ---

const coding = ["js", "ruby", "pytho", "java", "cpp"]

// for each loop does not return anything and it can not be stored in variable
const values = coding.forEach ( (item) => {
    // console.log(item);
    return item;
}) 

console.log(values);   // undefined



// ************ Filter Method ************

// ********* Method 1 *********
// Filter method is used to filter out the values from array


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// using filter method we can get those values which satisfy the condition.
// filter method returns only those values which satisfy the condition.
const newnums = myNums.filter ( (num) => num > 4 )
console.log(newnums);

// While using scope ' {} ' then we need to return value explicitly
const newnums2 = myNums.filter ( (nums) => {
    return nums > 3
})
console.log(newnums2);



// ************ for each loop for specific condition ************

// ********* Method 2 *********
const myNewNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ans = []

myNewNums.forEach ( (num) => {
    if (num > 4) {
        ans.push (num)
    }
})

console.log(ans);



//********** Example ****************
const books = [
    { title: 'Book Oggy-And_Cockroaches', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Pokemeon', genre: 'Non-Fiction', publish: 1984, edition: 2024},
    { title: 'Book Ninja-Hattori', genre: 'History', publish: 1991, edition: 2054},
    { title: 'Book Bheem', genre: 'Non-Fiction', publish: 1921, edition: 2054},
    { title: 'Book Doraemon', genre: 'Science', publish: 1941, edition: 2014},
    { title: 'Book DC', genre: 'Fiction', publish: 1990, edition: 2084},
    { title: 'Book Shaktiman', genre: 'History', publish: 1987, edition: 2024},
    { title: 'Book Krish', genre: 'Science', publish: 1923, edition: 2013},
    { title: 'Book Marvel', genre: 'Fiction', publish: 2008, edition: 2012},
];

// checking for fiction books 
let BooksDetails = books.filter ( (bk) => bk.genre === 'Fiction')

console.log(`Fiction Books are: ${BooksDetails.length}`);
console.log('Fiction Books are: ',BooksDetails);



// checking for publish year
let BookInfo = books.filter ( (bk) => {
    return bk.publish >= 2000
})

console.log('Books published after 2000 are: ', BookInfo)



// ** Checking multiple conditions **
// Checking for books published more than 1990 and books are of fiction genre
let FindOutBook = books.filter ( (bk) => {
    return bk.publish >= 1990 && bk.genre === 'Fiction'
})

console.log('Books published after 1990 and are of fiction genre : ', FindOutBook);




