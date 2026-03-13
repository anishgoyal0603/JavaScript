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
    console.log(`price is  ${this.score}`)
}

let u1 = createUser("chai",25)
console.log(u1.printMe) // undefined
//u1.printMe() // this gives error

/*
Here is the detailed explanation of why `u1.printMe` is `undefined` and why calling it causes an error.

The short answer is: **You put the method in the "User Blueprint", but `u1` is not a User. `u1` is the entire System (Global Object).**
z
Because you didn't use the `new` keyword, the link between your object and your prototype was never created.

---

### **1. Visualizing the "Broken Bridge"**

Imagine two separate islands.

* **Island A (The User Blueprint):** This is where you put the `printMe` method (`createUser.prototype`).
* **Island B (The Global Object):** This is where `u1` lives.

Normally, the `new` keyword builds a bridge from Island B to Island A. Since you skipped `new`, there is no bridge. `u1` searches its own island, finds nothing, looks at the main mainland (`Object.prototype`), finds nothing, and gives up.

---

### **2. Step-by-Step Execution Trace**

Let's trace exactly what JavaScript did when you ran this line:
`let u1 = createUser("chai", 25)`

1. **The Call:** You called `createUser` like a regular function (no `new`).
2. **The Context (`this`):** Inside the function, `this` became the **Global Object**.
3. **The Pollution:**
* `this.username = "chai"` → You wrote "chai" onto the Global Object.
* `this.score = 25` → You wrote 25 onto the Global Object.


4. **The Return:**
* `return this` → You returned the entire **Global Object**.
* Variable `u1` is now just another name for the **Global Object**.



---

### **3. The Failed Lookup (Why `undefined`?)**

Now you run: `console.log(u1.printMe)`

JavaScript starts the "Prototype Chain Lookup":

1. **Check `u1` (Global Object):** "Do you have a property named `printMe`?"
* *Result:* **NO.** (You only added `username` and `score`).


2. **Check Parent (`u1.__proto__`):** "Does the System Prototype have `printMe`?"
* *Result:* **NO.**


3. **Check Grandparent (`Object.prototype`):** "Do you have `printMe`?"
* *Result:* **NO.**


4. **End of Chain:** It hits `null`.
5. **Final Result:** `undefined`.

**Crucial Point:** It **NEVER** looked at `createUser.prototype`. Why would it? `u1` has no idea `createUser` even exists. It's just a variable holding the global object.

---

### **4. The Error (Why crash?)**

When you try to run `u1.printMe()`, you are doing this:
`undefined()`

In JavaScript, `undefined` is not a function. You cannot "call" it.
**Error:** `TypeError: u1.printMe is not a function`.

---

### **5. How `new` fixes the bridge**

If you change **one word**:
`let u1 = new createUser("chai", 25)`

The `new` keyword performs the magic **Linking Step**:

1. It creates a fresh object `{}`.
2. **It links `freshObj.__proto__` = `createUser.prototype`.**
3. It returns that object.

Now, when you ask for `u1.printMe`:

1. Check `u1`? No.
2. Check `u1.__proto__`? **YES!** It points to `createUser.prototype`.
3. Found `printMe`! Execute it.

### **Summary**

| Scenario | What is `u1`? | What is `u1.__proto__`? | Is `printMe` accessible? |
| --- | --- | --- | --- |
| **Without `new**` | **Global Object** | System Prototype (Complex) | **NO** (Broken Link) |
| **With `new**` | **User Instance** | `createUser.prototype` | **YES** (Correct Link) |
*/ 
