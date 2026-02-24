const original = {
  name: "Alice",        // Top-level primitive
  details: {            // Nested Object
    age: 25,
    city: "New York"
  }
};

const {...copy} = original // it creates a shallow copy
console.log(copy == original); //false
copy.name = "bob"
console.log(original.name); // "Alice"  <-- ORIGINAL DID NOT CHANGE
console.log(copy.name);     // "Bob"
// Why? Because name is a primitive. The shallow copy made a fresh slot for name.

copy.details.age = 99;

console.log(original.details.age); // 99 <-- ORIGINAL CHANGED!
console.log(copy.details.age);     // 99

// Why? Because details is an object. The shallow copy didn't copy the contents of details; it just copied the pointer to the details object. Both original and copy are pointing to the same details room in memory.
