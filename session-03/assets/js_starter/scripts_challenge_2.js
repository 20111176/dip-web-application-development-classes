// Challenge 2 Starter
const userObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
        twitter: "@johndoe",
        linkedIn: "linkedin.com/in/johndoe"
    },
    isEmployed: true,
};
 
// Deep clone the complexObject three times using the spread operator for shallow cloning
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const complexObject1 = deepClone(userObject)
const complexObject2 = deepClone(userObject)
const complexObject3 = deepClone(userObject)

console.log(complexObject1);
console.log(complexObject2);
console.log(complexObject3);

//  Each object changed age for later use
function changeAge(obj, newAge){
    obj.age = newAge;
}
changeAge(complexObject1, 60);
changeAge(complexObject2, 26);
changeAge(complexObject3, 35);

// Store the cloned objects in an array
const mergedArray = [complexObject1, complexObject2, complexObject3]
console.log(`This is the before sort`)
console.log(mergedArray);


// Sort the array of cloned objects based on the 'age' property in ascending order
mergedArray.sort((a,b) => a.age < b.age? -1 : 1);


// Log the sorted array to the console
console.log(`This is the after sort`)
console.log(mergedArray);


