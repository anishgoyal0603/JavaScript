//let u1 = Object.create() // error
let u1 = Object.create(null)
//let u2 = Object.create(undefined) // error
let u2 = Object.create({id:123,'l':"oo"})
u2.name = "Pillu"
console.log(u2);

/*
The behavior you are seeing is because `Object.create(arg1)` makes `arg1` the **Parent (Prototype)**, not the **Content** of the new object.

When you print an object, `console.log` only shows you the **"Own Properties"** (what is physically inside the object). It hides the **"Parent Properties"** (what is inherited).

Here is exactly what is happening in your code.

### **1. The Invisible Parent**

```javascript
// You created a new object 'u2'.
// You told JS: "Make this object {id:123...} the PARENT of u2"
let u2 = Object.create({id: 123, 'l': "oo"})

```

* **Is `u2` empty?** YES. Physically, `u2` has **zero** properties inside it.
* **Where is `{id:123}`?** It is hidden in the `[[Prototype]]` link (often called `__proto__`).

If you print `u2` immediately, the console sees an empty box. It doesn't print the parent's stuff because the parent is technically a separate object.

```javascript
console.log(u2); // Output: {} (Empty)

```

---

### **2. Adding an "Own" Property**

```javascript
u2.name = "Pillu"

```

Now you have put a physical property inside `u2`.

* **`u2` content:** `{ name: "Pillu" }`
* **`u2` parent:** `{ id: 123, l: "oo" }`

When you print `console.log(u2)`, it sees the "Own Property" `name` and prints it. It *still* ignores the parent's `id`.

```javascript
console.log(u2); // Output: { name: 'Pillu' }

```

---

### **3. The "Ghost" Logic (Inheritance)**

Even though `id` and `l` are not visible in the print, **they are accessible**. This is the magic of `Object.create`.

```javascript
console.log(u2);    // Output: { name: 'Pillu' } (Only shows Own)
console.log(u2.id); // Output: 123 (FOUND IT!)

```

**Why?**

1. JS looks inside `u2` for `id`. **Not found.**
2. JS looks at the **Parent** (the object you passed in argument 1). **Found it!**
3. It returns `123`.

### **Summary**

| Code | What it does | Where does the data go? | Visible in `console.log`? |
| --- | --- | --- | --- |
| `Object.create(obj)` | Creates a new object. | `obj` goes into `__proto__` (Hidden Parent). | ❌ **No** (Hidden) |
| `u2.name = "Pillu"` | Assigns a property. | "Pillu" goes into `u2` directly (Own Property). | ✅ **Yes** |

**Conclusion:**
The object you passed as an argument is the **Blueprint**, not the **Building**. The building starts empty, but it is built *on top* of that blueprint.
*/ 