function User(name) {
    let secret = "I am " + name;

    // ⚠️ DANGER: Overwriting the SHARED prototype
    User.prototype.saySecret = function() {
        console.log(secret);
    }
}

// 1. Create User A
let u1 = new User("Alice");
u1.saySecret(); 
// Output: "I am Alice" (So far, so good)

// 2. Create User B
let u2 = new User("Bob");
// The prototype function is now REPLACED. It now closes over Bob's secret.

// 3. The Bug appears
u2.saySecret(); // Output: "I am Bob"
u1.saySecret(); // ❌ Output: "I am Bob"