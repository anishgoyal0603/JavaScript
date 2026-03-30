function User(email,password)
{
    this.email = email
    this.password = password

    Object.defineProperty(this,'email',{
        get:   function(){
            return this._email.toUpperCase()
        } ,
        set: function(value){
           this._email = value
        }
    })

    Object.defineProperty(this,'password',{
        get:   function(){
            return this._password.toUpperCase()
        } ,
        set: function(value){
           this._password = value
        }
    })
}

const chai = new User("chai@chai.com",'chai')
console.log(chai.email())
console.log(chai.password())   

/*
You have **two major errors** in this program. One will cause a **crash (TypeError)**, and the other will cause a **Logic Error (Undefined data)**.

Here is the breakdown of exactly what goes wrong.

### **Error 1: The Syntax Crash (Immediate Stop)**

In your `console.log` statements, you are calling the properties like functions.

```javascript
console.log(chai.email())    // ❌ Error
console.log(chai.password()) // ❌ Error

```

* **The Error:** `TypeError: chai.email is not a function`
* **The Reason:** You defined these using `get` (Getters). Getters are accessed like **variables**, not functions.
* **The Fix:** Remove the parentheses `()`.
* Correct: `chai.email`



---

### **Error 2: The "Lost Data" Logic Bug**

Even if you fix the parentheses, your output will be `UNDEFINED`, not the email you passed.

**Why? The Order of Execution.**

Look at the timeline of your constructor:

1. **Line 3:** `this.email = email`
* JavaScript creates a standard property named `email` on the object.
* It stores the value `"chai@chai.com"`.


2. **Line 6:** `Object.defineProperty(this, 'email', ...)`
* JavaScript **deletes/overwrites** the standard property `email` you just created.
* It replaces it with your new Getter/Setter rules.
* **Crucial Point:** The value `"chai@chai.com"` from Step 1 is **discarded**. It is not automatically moved to `_email`.


3. **Line 24:** `console.log(chai.email)`
* The Getter runs.
* It returns `this._email`.
* **Problem:** You never actually saved anything into `_email`. You saved it into `email` (which got deleted).
* **Result:** `undefined`.



---

### **The Corrected Code**

To fix this, you must define the Getters/Setters **FIRST**, and assign the values **AFTER**. This ensures the assignment triggers the Setter, which saves the data to `_email`.

```javascript
function User(email, password) {
    // 1. Define the Rules (Getters/Setters) FIRST
    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase()
        },
        set: function(value) {
            this._password = value
        }
    })

    // 2. Assign Values LAST
    // Now, this assignment triggers the 'set' function defined above!
    this.email = email;       
    this.password = password; 
}

const chai = new User("chai@chai.com", 'chai')

// 3. Access as Properties (No parentheses)
console.log(chai.email);    // Output: CHAI@CHAI.COM
console.log(chai.password); // Output: CHAI

```

### **Summary of Fixes**

1. **Move Assignments to Bottom:** `this.email = email` must happen *after* `Object.defineProperty` so the setter can catch it.
2. **Remove Parentheses:** Use `chai.email`, not `chai.email()`.
*/ 