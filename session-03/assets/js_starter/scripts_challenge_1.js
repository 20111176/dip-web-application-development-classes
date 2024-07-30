// Challenge 1 Starter
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

    // Method to change the age property
    changeAge: function(newAge) {
       this.age = newAge;
       console.log(`== Age updated ==`)
    },
};

// Execute the method to change the age
console.log(`Default age: ${userObject.age}`)
userObject.changeAge(42);


// Log the updated complexObject
console.log(`New age: ${userObject.age}`)

list = [
    {name:`One`, age:10},
    {name:`Two`, age:15},
    {name:`Three`, age:40},
    {name:`Four`, age:20},
]

ordering=(x,y) =>{return x.age<y.age?-1:1}
