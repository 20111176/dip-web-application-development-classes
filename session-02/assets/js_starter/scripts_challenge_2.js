// Student ID: 20111176
// Student Name: Sukwhan KO
// Course: ICT50220 Diploma of Information Technology (Back End Web Development)

// Challenge 2 Starter
// Initialise the arrays
let array1 = [1, 2, 3, 2];
let array2 = [4, 5, 6, 4];

// Use the spread operator to merge the two arrays
let newArray = [...array1,...array2];
console.log(newArray);

// Use the Set object to remove duplicates
let mySet = new Set(newArray);
console.log(mySet);

// Use array destructuring to assign the first three elements to variables
let [first, second, third] = mySet;
console.log(`${first}, ${second}, ${third}`)

// Set the value of the output filed to be the second element of the unique array
let outputFiled = document.getElementById('OutputField');
outputFiled.innerText = second