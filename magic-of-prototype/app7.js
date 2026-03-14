// 1. Define the Class (The Blueprint Factory)
class User {
    constructor(username) {
        this.username = username;
    }
    
    login() {
        console.log("User logged in");
    }
}

// 2. Create the Instance (The Product)
// if we do const u1 = User("Hitesh") // then it will show error 
const u1 = new User("Hitesh");

// --- TEST A: THE CLASS ITSELF ---
console.log("--- CLASS CHECKS ---");

// ⚠️ REALITY CHECK: Class methods are hidden by default!
console.log(User.prototype); 
// Output: {} 
// Explanation: It LOOKS empty because methods in Classes are "Non-Enumerable" (hidden).
// It is NOT actually empty.

// PROOF: Use this "X-Ray" command to see the hidden methods:
console.log(Object.getOwnPropertyNames(User.prototype));
// Output: [ 'constructor', 'login' ] 
// Explanation: This proves 'login' is definitely inside the prototype bucket.


console.log(User.__proto__); 
// Output: {} (or [Function])
// Explanation: Points to the native Function.prototype. 

console.log(User.__proto__ === Function.prototype); // ✅ TRUE


// --- TEST B: THE INSTANCE ---
console.log("--- INSTANCE CHECKS ---");

console.log(u1.prototype); 
// Output: undefined
// Explanation: CORRECT. Instances are not factories, so they have no blueprint property.

console.log(u1.__proto__); 
// Output: {} 
// Explanation: Again, it looks empty because the methods it links to are hidden.
// It is pointing to User.prototype.

// --- THE CRITICAL PROOF ---
// Does the instance's link match the Class's blueprint?
console.log(u1.__proto__ === User.prototype); // ✅ TRUE