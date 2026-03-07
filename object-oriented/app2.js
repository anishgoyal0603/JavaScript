function user(username,loginCount,isLoggedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = user("hitesh",12,true)
const usertwo = user("ChaiAurCode",11,false)
console.log(userOne)

/* 
You are absolutely correct. I apologize for the browser-centric terminology.

In a **Node.js** environment, there is no `window` object. Instead, there is an object literally named **`global`**.

The behavior is **identical**, but the name of the giant object you are messing with has changed.

Here is the explanation tailored specifically for your **Node.js** runtime.

### **1. The "Global" Object in Node.js**

In a browser, the top-level object is `window`.
In Node.js, the top-level object is **`global`**.

* **What is it?** It is the master object that holds all the Node.js superpowers: `process` (info about your computer/CPU), `Buffer` (memory helpers), `setImmediate`, `clearTimeout`, `console`, etc.
* **Why did you get a huge object?** Because when you returned `this`, you returned the entire Node.js `global` environment.

---

### **2. Trace the Code Execution in Node.js**

Let's re-run your specific code scenario in the Node environment.

```javascript
function user(username, loginCount, isLoggedIn) {
    // In Node (non-strict mode), inside a regular function call, 
    // 'this' defaults to the 'global' object.
    
    this.username = username;      // writes to global.username
    this.loginCount = loginCount;  // writes to global.loginCount
    this.isLoggedIn = isLoggedIn;  // writes to global.isLoggedIn

    return this; // Returns the giant 'global' object
}

// CALL 1
const userOne = user("hitesh", 12, true);
// userOne is now a reference to the 'global' object.
// global.username is now "hitesh".

// CALL 2
const usertwo = user("ChaiAurCode", 11, false);
// This function runs on the SAME 'global' object.
// global.username is overwritten to "ChaiAurCode".
// usertwo is ALSO a reference to the 'global' object.

```

### **3. How to Prove This (Debug it yourself)**

If you run this code in your terminal, you will see the proof immediately:

```javascript
function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const userOne = user("hitesh", 12, true);

// PROOF 1: userOne is actually the global object
// In Node, the global object has a circular reference called 'global'
console.log(userOne === global); // Output: true

// PROOF 2: Check the overwritten data
const usertwo = user("ChaiAurCode", 11, false);

console.log(userOne.username); // Output: 'ChaiAurCode' (Wait, why not hitesh?)
// Because userOne IS the global object, and the global object was just updated.

```

### **4. Why so many properties?**

When you `console.log(userOne)`, Node.js tries to print the object. Since `userOne` is `global`, it prints every built-in tool Node has loaded.

You will see things like:

* **`queueMicrotask`**: Internal async handler.
* **`clearInterval` / `setTimeout**`: Timer functions.
* **`performance`**: System performance metrics.
* **`...`**: And finally, at the very end (or mixed in), you will see your `username: 'ChaiAurCode'`.

### **Summary of the Mistake**

1. **Missing `new**`: You called the function normally.
2. **Context Defaulting**: In Node.js functions (standard mode), `this` defaults to `global`.
3. **Pollution**: You accidentally wrote your user data onto the system's root object.
4. **Cloning**: Since there is only one `global` object, `userOne` and `usertwo` are just two variable names pointing to the same system object.

**The Fix:**
Just add **`new`**.

```javascript
const userOne = new user("hitesh", 12, true);

```

This forces Node to create a **new** empty object `{}` instead of handing you the `global` system object.
*/