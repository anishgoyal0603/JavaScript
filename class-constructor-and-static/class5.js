function User(name) {
    let secret = 123; // Local variable (Private)

    // PATTERN A: Can see 'secret'
    this.getSecret = function() {
        return secret; // ✅ Works
    }

    // PATTERN B: Cannot see 'secret'
    User.prototype.failSecret = function() {
        return secret; // ✅ works inside function but outside function if we define this prototype function then we have to use this.secret in body
    }
}

let u1 = new User("kk");
console.log(u1.getSecret())
console.log(u1.failSecret())

console.log(u1.hasOwnProperty("getSecret")); // ✅ TRUE (It's inside u1)
console.log(u1.hasOwnProperty("failSecret")); // ❌ FALSE (It's up the chain)