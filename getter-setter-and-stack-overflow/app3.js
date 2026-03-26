class User{
    constructor(email,password)
   {
           this.email = email
           this.password = password
   }

   get password()
   {
    return this.password
   }
}

let u1 = new User("@",123)

/*
Yes, this code will show an error immediately. It has **two** fatal problems, but you will hit the first one instantly.

### **1. The Error You Will See**

**Error:** `TypeError: Cannot set property password of #<User> which has only a getter`

### **2. Why is this happening? (The "Read-Only" Trap)**

In JavaScript Classes, if you define a **Getter** (`get password`) but **NO Setter** (`set password`), the property automatically becomes **Read-Only**.

When your code runs:

1. **`new User("@", 123)`** calls the constructor.
2. **`this.password = password`** tries to **write** (assign) a value to the password property.
3. JavaScript checks the class and sees: "Oh, this property has a Getter, but no Setter. It is Read-Only."
4. Since Classes run in **Strict Mode** by default, JavaScript refuses to ignore this violation and throws a **TypeError**, crashing your program.

---

### **3. The Hidden "Logic Bomb" (Recursion Error)**

Even if you fixed the first error (by adding a setter), your code contains a second error inside the getter itself.

```javascript
get password() {
    return this.password; // ❌ RECURSION ERROR
}

```

* **The Problem:** inside the getter, you are trying to read `this.password`.
* **The Loop:** Reading `this.password` triggers the getter. The getter runs and reads `this.password`, which triggers the getter again...
* **The Result:** If the code ever reached this line, it would crash with `RangeError: Maximum call stack size exceeded`.

### **4. How to Fix Both Errors?**

You need to:

1. Add a **Setter** (so you can write to it).
2. Use a **different variable name** (like `_password`) for storage to avoid the recursion loop.

**Corrected Code:**

```javascript
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password; // Triggers the setter
    }

    // 1. Add a Setter (fixes TypeError)
    set password(value) {
        this._password = value; // Store in a different variable
    }

    // 2. Fix the Getter (fixes Recursion)
    get password() {
        return this._password; // Read from the different variable
    }
}

let u1 = new User("@", 123); // ✅ Works perfectly
console.log(u1.password);    // 123

```
*/ 