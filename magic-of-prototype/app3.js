function createUser(username,score)
{
    this.username = username
    this.score = score
    return this
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
console.log(u1.prototype) //undefined
console.log(u1.__proto__) //{}
console.log(u1.__proto__ === createUser.prototype) // false
console.log(u1.__proto__ === Object.prototype) //false
console.log(u1.__proto__.constructor.name) //Object

// 1. Check the Immediate Parent (The Middleman)
let parent = Object.getPrototypeOf(u1); // same as u1.__proto__
console.log(parent === Object.prototype); // ❌ FALSE (It's the middleman)

// 2. Check the Grandparent (The Root)
let grandParent = Object.getPrototypeOf(parent);
console.log(grandParent === Object.prototype); // ✅ TRUE (Here is the real Object.prototype)

// 3. Why the name was "Object"
// The 'parent' didn't have a constructor, so it borrowed it from 'grandParent'.
console.log(parent.constructor === Object); // ✅ TRUE (Inherited!)

/*
You have encountered the exact same "Global Object" trap we discussed earlier! Because you missed the `new` keyword, `u1` is **not** a User object.

Here is the line-by-line breakdown, followed by a deep explanation of why the last two lines behave the way they do.

### **1. The Code Breakdown**

```javascript
// 1. Function Definition
function createUser(username, score) {
    this.username = username;
    this.score = score;
    return this; // DANGER: Without 'new', this returns the Global Object!
}

// 2. Initial Logs
console.log(createUser.prototype); // {} 
// Explanation: The empty blueprint bucket waiting for methods.

console.log(createUser.__proto__); // {} (Actually Function.prototype)
// Explanation: The hidden link to the native Function creator.

// 3. Adding Methods to the Blueprint
createUser.prototype.increment = function(){ this.score++ }
createUser.prototype.printMe = function(){ console.log(`score is ${this.score}`) }

// 4. Checking Logs Again
console.log(createUser.prototype); 
// Output: { increment: [Function], printMe: [Function] }
// Explanation: Good! The blueprint now contains your functions.

console.log(createUser.__proto__);
// Output: {} (Function.prototype)
// Explanation: Adding methods to the blueprint DOES NOT change who created the function itself.

// 5. THE TRAP (Execution without 'new')
let u1 = createUser("name1", 1);
let u2 = createUser("name2", 2);

```

**What is `u1` right now?**

* Because you didn't use `new`, `this` inside the function referred to the **Global Object**.
* `u1` is now a reference to the **Global Object** (Window/Node Global).
* `u1` is **NOT** linked to `createUser.prototype`.
* Note: `u1` and `u2` are actually the same object (the Global Object). `u2` overwrote the data of `u1`.

---

### **2. Explaining the Last Two Lines**

This is the most important part to understand your output.

#### **Line A: `console.log(u1.prototype)**`

* **Output:** `undefined`
* **Why?**
* `u1` is an **Object** (specifically, the Global Object).
* The `.prototype` property (the "Blueprint bucket") **ONLY** exists on Functions and Classes.
* Regular objects (like `u1` here) do not have a `.prototype` property. They are "consumers," not "creators."



#### **Line B: `console.log(u1.__proto__)**`

* **Output:** `{}` (This is `Object.prototype`)
* **Why?**
* `u1` is the Global Object.
* Every object has a `.__proto__` property pointing to its creator.
* The Global Object ultimately inherits from the root **`Object.prototype`**.
* It does **NOT** point to `createUser.prototype` because you didn't use `new`. You broke the link.



---

### **3. The "What If" (If you had used `new`)**

If you had written: `let u1 = new createUser("name1", 1)`

* **`u1.prototype`**: Still `undefined` (Instances never have `.prototype`).
* **`u1.__proto__`**: This would now point to `{ increment: f, printMe: f }` (`createUser.prototype`).

### **Comparison Table**

| Code | Your Result (Missing `new`) | Correct Result (With `new`) |
| --- | --- | --- |
| **What is `u1`?** | The **Global Object** (Window/Node). | A new **User Instance**. |
| **`u1.prototype`** | `undefined` (Objects don't have blueprints). | `undefined` (Instances don't have blueprints). |
| **`u1.__proto__`** | `Object.prototype` (Root Object). | `createUser.prototype` (Your custom blueprint). |
| **Can `u1.printMe()` run?** | **NO.** (It's not in the chain). | **YES.** (It's in the chain). |

**Conclusion:** The last two lines prove that `u1` is just a standard system object and has no connection to your `createUser` logic at all.
*/ 


