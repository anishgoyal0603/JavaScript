class User{
    constructor(email,password)
    {
        this.email = email
        this.password = password
    }

    set password(value){ // set accepts exactly one paramter , if we define here no parameter or more than one parameter then it shows error like set password() or set password(value1 , value2)
        this.password = value
    }
}

let u1 = new User('@',123)

/*
Here is a step-by-step breakdown of exactly why the crash happens and what is happening to your properties.

It gives RangeError: Maximum call stack size exceeded

### **1. Why it Crashes (The Infinite Loop)**

The crash happens because the **name of the setter** is the same as the **property you are trying to set inside it**.

Imagine you have a button labeled "Save Password".

* **Your Code:** You programmed the button so that when it is clicked, it **presses itself** again.

**Trace the Execution:**

1. **Constructor Runs:** `this.password = 123`
* JavaScript asks: *"Is there a setter for 'password'?"*
* **Yes.** Run the setter function.


2. **Setter Runs (Round 1):**
* Inside the setter, you wrote: `this.password = value`
* JavaScript asks: *"Is there a setter for 'password'?"*
* **Yes.** (It's the same function!). Run the setter function again.


3. **Setter Runs (Round 2):**
* Inside the setter: `this.password = value`
* JavaScript asks: *"Is there a setter for 'password'?"*
* **Yes.** Run it again.


4. **...Round 10,000... CRASH.**

---

### **2. Why `_password` fixes it**

You asked: *"When we do `this._password = value` will the getter be called?"*

**No.** That is the key trick.

* Your setter is named **`password`** (no underscore).
* Your storage variable is named **`_password`** (with underscore).

When you write `this._password = value`:

1. JavaScript asks: *"Is there a setter named `_password`?"*
2. **No.** (You only defined a setter for `password`).
3. **Result:** JavaScript treats `_password` as a boring, normal variable. It just saves the value to memory and stops. **The loop is broken.**

---

### **3. Which property actually exists? (`password` or `_password`)**

This is the most important concept to understand about Getters/Setters.

If you look at the object in the console (`console.log(u1)`), you will see:

```javascript
User {
    email: "@",
    _password: 123  // <--- The REAL data is here
}

```

* **`_password` (The Storage):** This is the **actual property** on the object. It takes up memory. It holds the value `123`.
* **`password` (The Interface):** This is **NOT a property** on the object instance anymore. It is a set of functions (methods) sitting on the Class Prototype.

**Think of it like a Bank Vault:**

* **`_password`** is the physical **Safe Box** inside the vault where the gold (data) sits.
* **`password`** is the **Window Teller**.
* You cannot walk into the vault (conceptually). You must go to the Teller (`password`).
* You give the gold to the Teller (`set password`).
* The Teller walks back and puts it in the Safe Box (`_password`).



### **Summary**

1. **Crash Reason:** `this.password = value` inside a setter named `password` triggers itself recursively.
2. **The Fix:** You must save the data to a variable with a **different name** (like `_password`) to avoid triggering the setter again.
3. **The Result:** Your object will physically contain `_password` (data), but you will interact with it using `password` (methods).
*/ 

