// singleton
// object.create()


// object literals

const jsUser = {
    name: "Anish",
    "full name": "Anish Kumar", // Key with space
    age: 20,
    location: "Indore",
    email:"dhari@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "optional":[1,2,3]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
//console.log(jsUser[email]); // ReferenceError: email is not defined
//console.log(jsUser."full name"); // error // doesn't matter strike through on name 
//console.log(jsUser.full name); // error
console.log(jsUser["full name"]);
//console.log(jsUser."optional"); // SyntaxError: Unexpected string
console.log(jsUser.optional); // valid
console.log(jsUser["optional"]); // valid
//console.log(jsUser[location]); // ReferenceError: location is not defined
console.log(jsUser["location"]);








