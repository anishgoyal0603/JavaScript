    function multiplyBy5 (num)
    {
        this.num = num
        let num = num
        return num * 5
    }

    console.log(multiplyBy5(5))
    console.log(multiplyBy5.power)
    console.log(multiplyBy5.prototype)

/*
Here is the breakdown of the code, the output you will get, and the "Secret Life of JavaScript Functions."

### **The Output**

When you run this code in a standard environment (like Node.js or a Browser console), you will get:

```text
25
undefined
{}   // (Or { constructor: f } depending on the browser)

```

---

### **Line-by-Line Explanation**

#### **1. `function multiplyBy5 (num) { ... }**`

* **What it does:** Declares a function.
* **The Secret:** In JavaScript, **Functions are actually Objects**.
* Think of a function as a "Super Object." It can be called (run code), but it can *also* store properties like a normal object (`{ key: value }`).



#### **2. `console.log(multiplyBy5(5))**`

* **Output:** `25`
* **Reason:** This is a standard function call. You pass `5`, it multiplies by `5`, and returns `25`.

#### **3. `console.log(multiplyBy5.power)**`

* **Output:** `undefined`
* **Reason:**
* You are trying to access a property named `power` on the function object.
* **However, you never assigned it!**
* `power` is **not** a built-in keyword in JavaScript. It is just a random name (like `multiplyBy5.pizza` or `multiplyBy5.score`).
* Since this property doesn't exist on the object yet, JS returns `undefined`.


> **Note:** If you had written `multiplyBy5.power = 2` before this line, it would have printed `2`. This proves functions behave like objects.



#### **4. `console.log(multiplyBy5.prototype)**`

* **Output:** `{}` (An empty object, technically containing a constructor)
* **Reason:**
* Every regular function in JavaScript **automatically** gets a property called `prototype` the moment you declare it.
* JavaScript gives you this empty object "for free" just in case you decide to use this function as a Constructor (using the `new` keyword) later on.



---

### **Deep Dive: What is `power` and `prototype` here?**

To understand this, you need to visualize how JavaScript sees a function.

#### **1. What is `power`?**

In your specific code, `power` is **nothing special**. It is just a custom property name.
The confusion usually comes from tutorials (like Hitesh Choudhary's) where they assign a value to it to prove a point.

If you add this line:

```javascript
multiplyBy5.power = 10;
console.log(multiplyBy5.power); // Now it prints 10!

```

**The Lesson:** This proves that functions are "First-Class Objects." You can stick variables onto them just like you stick stickers onto a laptop.

#### **2. What is `prototype`?**

This is a **Built-in Property**.

* **Is it the `__proto__`?** NO. This is often confused.
* **What is it then?**
* The `.prototype` property is a **"Bucket"** that belongs to the function.
* It is used **ONLY** if you use the `new` keyword.
* If you write `new multiplyBy5()`, JavaScript will look at `multiplyBy5.prototype` and give those properties to the new child object.
* Since `multiplyBy5` is just a regular function here (not a class), the prototype sits there empty and unused, waiting for a `new` keyword that never comes.



### **Summary**

1. **`multiplyBy5(5)`**: Executes the code inside the function.
2. **`multiplyBy5.power`**: Tries to read a custom variable on the function object (Undefined because you didn't set it).
3. **`multiplyBy5.prototype`**: Accesses the default "inheritance bucket" created automatically for every function.    
*/ 