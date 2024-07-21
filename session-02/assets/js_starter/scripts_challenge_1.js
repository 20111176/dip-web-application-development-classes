// Challenge 1 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];
console.log(...numbers);

// Use the pop() method to remove the last element from the array
numbers.pop()
console.log(...numbers);

// Use the unshift() method to add the last element to the beginning of the array
numbers.unshift(numbers.length)
console.log(...numbers);

// Use the slice() method to exclude the first 3 elements and return a new array
let newNumbersArray = numbers.slice(3, numbers.length)
console.log(...newNumbersArray);

// Set the value of the outputfield inner html to the new array
let outputField = document.getElementById('OutputField'); // select the output field
outputField.innerHTML = newNumbersArray; // set its content to the new array
console.log(...numbers);