// Challenge 3 Starter
// Create the class and use the constructor method
class UserObject {
    constructor(title = "None", year = 1900, author = "None"){
        this.title = title;
        this.year = year;
        this.author = author;
    }
}

// Create an instance of the ComplexObject class (hint: add the properties)
const userObjectInstance1 = new UserObject();
const userObjectInstance2 = new UserObject('The Great Gatsby', '1925', 'F. Scott Fitzgerald!');

// Log the new instance of the object
console.log(userObjectInstance1);
console.log(userObjectInstance2);