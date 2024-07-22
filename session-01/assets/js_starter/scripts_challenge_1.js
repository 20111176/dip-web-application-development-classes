// Student ID: 20111176
// Student Name: Sukwhan KO
// Course: ICT50220 Diploma of Information Technology (Back End Web Development)

// Challenge 5 Solution
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// // Define the function doubleNumbers
function doubleNumbers(arr) {
    let doubled = arr.map((number) => number * 2);

    return doubled;
}

// Call the function with the numbers array
let result = doubleNumbers(numbers);

// Console log the new array
console.log(result);
