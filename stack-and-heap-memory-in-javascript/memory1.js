
// stack -> primitive types
// heap -> non-primitive
let myYoutubename = "hiteshchoudharydotcom";
let anothername = myYoutubename; 

console.log(anothername)
// Only the copy is changed
anothername = "chaiaurcode";

console.log(myYoutubename); // Output: "hiteshchoudharydotcom" (Original remains same)
console.log(anothername);   // Output: "chaiaurcode" (Copy changed)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

// Changing data via userTwo
userTwo.email = "hitesh@google.com";

console.log(userOne.email); // Output: "hitesh@google.com" (Original CHANGED)
console.log(userTwo.email); // Output: "hitesh@google.com"

