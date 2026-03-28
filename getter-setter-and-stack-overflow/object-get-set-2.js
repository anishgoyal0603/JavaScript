// error in this code

let user = {
    email : 'h@hc.com',
    password : 'abc',

    get email()                   
    {
      return this._email.toUpperCase()
    },

    set email(value)
    {
      this._email = value
    }
}

console.log(user.email)
console.log(user.password)

/*
This code will **crash** with an error.

**Error:** `TypeError: Cannot read properties of undefined (reading 'toUpperCase')`

---

### **Why does it crash?**

The crash happens because of the **"Last One Wins"** rule inside Object Literals, combined with a missing variable.

Here is the step-by-step breakdown of what JavaScript does:

1. **Line 2 (`email : 'h@hc.com'`):**
* JavaScript sees you defining `email` as a simple string.
* *State:* `user` has a property `email` with value `'h@hc.com'`.


2. **Lines 5-13 (The Getter & Setter):**
* JavaScript sees you defining `email` **again** (as a Getter/Setter).
* **The Overwrite:** Since this definition comes *last*, it **completely deletes** the definition from Line 2.
* *State:* `user` has a Getter/Setter for `email`. The string `'h@hc.com'` is **discarded**. It does not exist anymore. It was not moved to `_email`.


3. **Line 18 (`console.log(user.email)`):**
* You try to read `user.email`.
* The **Getter** runs: `return this._email.toUpperCase()`.
* It looks for `this._email`. **Does it exist? NO.** (You never created it).
* `this._email` is `undefined`.
* It tries to run `undefined.toUpperCase()`.
* **💥 CRASH.**



### **The Key Misunderstanding**

You might be thinking that `email : 'h@hc.com'` somehow "initializes" the setter or saves data for the getter. **It does not.**

In an object literal `{ ... }`:

* Writing the key twice is a **replacement**, not an initialization.
* The first definition (`'h@hc.com'`) is thrown in the trash before the object is even finished being built.

### **How to fix it?**

If you want the object to start with data, you must put that data into the **backing variable** (`_email`), not the main key (`email`).

```javascript
let user = {
    // 1. Initialize the BACKING store directly
    _email : 'h@hc.com', 
    password : 'abc',

    // 2. Define the Accessor for the main key
    get email() {
      return this._email.toUpperCase()
    },

    set email(value) {
      this._email = value
    }
}

console.log(user.email) // Output: "H@HC.COM"

```
*/
