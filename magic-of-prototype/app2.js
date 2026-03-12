function createUser(username,score)
{
    this.username = username
    this.score = score
}


console.log(createUser.prototype) // {}
console.log(createUser.__proto__) // {}
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is  ${this.score}`)
}


console.log(createUser.prototype) // { increment: [Function (anonymous)}
console.log(createUser.__proto__);

let u1 = createUser("name1",1)
let u2 = createUser("name2",2)
//console.log(u1.prototype) //error as u1 is undefined
//console.log(u1.__proto__) //error as u1 is undefined
console.log(createUser.__proto__ ===Function.prototype) //true

/*
This is a great observation. Your code reveals the dual nature of functions in JavaScript.

Let's clarify the output first because `console.log` can sometimes be misleading depending on where you run it (browser vs. Node.js).

If you run `console.log(createUser.__proto__)`, you are **not** actually getting a plain empty object `{}`. You are getting **`Function.prototype`**.

Here is the technical breakdown of why this happens.

### **1. `createUser.prototype` (The Blueprint)**

* **Output:** `{ constructor: f }` (Often shows as `{}` in some consoles until expanded).
* **Explanation:**
* `createUser` is a function.
* Every function is born with a `.prototype` property.
* This property is an object designated to be the parent (the `__proto__`) for any **future instances** you create using `new createUser()`.
* By default, it is mostly empty; it only contains a reference back to the function itself (the `.constructor` property).



### **2. `createUser.__proto__` (The Lineage)**

* **Output:** `Function.prototype` (This is a native code object).
* **Explanation:**
* `createUser` is **itself** an object (a Function object).
* Just like `const arr = []` is created by the `Array` constructor, your function `createUser` was created by the internal **`Function`** constructor.
* Therefore, `createUser.__proto__` points to the prototype of its creator: **`Function.prototype`**.



### **Visualizing the Chain**

### **Why does it look like `{}`?**

You mentioned the output is `{}`. This is likely because `Function.prototype` is a special object that acts like a function but doesn't have enumerable properties you can easily see in a simple log.

Let's prove what it actually is with a strict equality check:

```javascript
function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// TEST 1: The Blueprint for children
console.log(createUser.prototype); 
// Output: { constructor: createUser }

// TEST 2: The Creator of the function itself
console.log(createUser.__proto__); 
// Output: [Function] (This is Function.prototype)

// THE PROOF:
console.log(createUser.__proto__ === Function.prototype); // ✅ TRUE
console.log(createUser.__proto__ === Object.prototype);   // ❌ FALSE

```

### **Summary of the Difference**

| Property | Value | Meaning |
| --- | --- | --- |
| **`.prototype`** | `{ constructor: createUser }` | "I am the blueprint. If you run `new createUser()`, the new object will look like me." |
| **`.__proto__`** | `Function.prototype` | "I am a function. I was created by the global `Function` constructor, so I inherit methods like `.call()` and `.apply()` from it." |

**Would you like to see how this changes when we switch to Classes in the next step?**
*/ 


