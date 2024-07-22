// Student ID: 20111176
// Student Name: Sukwhan KO
// Course: ICT50220 Diploma of Information Technology (Back End Web Development)

// Challenge 4 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];
let targetNumber = 5;
// Find the index of the number 5 in the array
let hasNumberFive = numbers.findIndex(x => x === targetNumber);


// If the number 5 is found in the array
if (hasNumberFive !== -1){
  // Console log each number in the array up to and including 5
  numbers.forEach((element) => {
    if (element > targetNumber) return;
    console.log(element);
  });
}
else {
  // Output a message if the number 5 is not in the array
  console.log("Number not in array")
}
