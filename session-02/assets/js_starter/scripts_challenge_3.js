// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Check if the array includes the number 5
console.log(numbers)
console.log(numbers.includes(5));

// If true, filter out numbers less than 5
const filteredB = numbers.filter((item) => item < 5);
console.log(filteredB)

// Then square each number in the resulting array
const squiredArray = filteredB.map((item) => item * item);

// Output the final array
console.log(squiredArray)
// squiredArray.push(5)

// Output a message if the number 5 is not in the array
if (!squiredArray.includes(5)) {
console.log("The number 5 is not in the array.");
} else {
    console.log(`The number 5 is in the array.`);
}
