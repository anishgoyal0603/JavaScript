// This also doesn't work , even though we have chnaged the order of getters and setters , because objects behave differently

let user = {

     get email()                   
    {
      return this._email.toUpperCase()
    },

    set email(value)
    {
      this._email = value
    }
    ,
    email : 'h@hc.com',
    password : 'abc',

   
}

console.log(user.email)
console.log(user.password)

/*
This is the most confusing part of JavaScript object creation, so don't feel bad! You are expecting the colon (`:`) inside an object literal to behave like the equals sign (`=`) inside a function. **It does not.**

Here is the technical reason why they behave differently.

### **1. The Object Literal (`{ ... }`) = The Blueprint Rule**

When you write an object literal, you are giving JavaScript a **Static Blueprint** to build an object all at once.

JavaScript reads the keys inside `{ ... }` as **Definitions**, not **Assignments**.

* **Rule:** If a Blueprint has the same key defined twice, the second definition **replaces** the first one. It doesn't "run" the first one.
* **The Colon (`:`)**: This means "Define this property as...". It does **not** mean "Assign this value to...".

**Visualizing the Object Literal parsing:**

```javascript
let user = {
    // Definition 1: "Make 'email' a Getter/Setter"
    set email(val) { ... },

    // Definition 2: "Actually, scratch that. Make 'email' a String."
    email: 'h@hc.com' 
}

```

* **Result:** The engine sees the second instruction and says, "Okay, forget the Getter/Setter. This property is now just a string."
* **Setter Triggered?** **NO.** You cannot trigger a setter while you are still defining the object itself.

---

### **2. The Function (`this.prop = ...`) = The Execution Rule**

When you are inside a function, the object **already exists** (created by `new`). You are now running code **line-by-line**.

Here, you are using the **Equals Sign (`=`)**.

* **Rule:** The `=` operator asks: "Does this property have a setter?"
* If **Yes**, it runs the setter.
* If **No**, it just saves the value.



```javascript
function User() {
    // Step 1: Define the setter on the EXISTING object
    Object.defineProperty(this, 'email', { set: ... });

    // Step 2: Assign a value
    // The engine sees '='. It checks 'this'. 
    // It sees the Setter from Step 1.
    this.email = "h@hc.com"; // ✅ TRIGGERS SETTER
}

```

---

### **The Critical Difference: `:` vs `=**`

| Syntax | Context | Meaning | Triggers Setter? |
| --- | --- | --- | --- |
| **`key: value`** | Object Literal `{}` | **"Define"** (Create/Overwrite) | ❌ **No.** It destroys the previous definition. |
| **`obj.key = value`** | Code Execution | **"Assign"** (Update) | ✅ **Yes.** It activates the setter logic. |

### **Summary**

* In your **Object Literal**, you wrote `email: '...'`. This is a **Definition**. It overwrote your getter/setter logic because it came last.
* In your **Function**, you wrote `this.email = '...'`. This is an **Assignment**. It successfully triggered the setter you defined on the previous line.
*/

