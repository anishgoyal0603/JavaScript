const original = [1, 2, 3];

const copy = [...original]; // Creates a brand new array in memory

copy.push(4);

console.log(original); // [1, 2, 3] (Safe!)
console.log(copy);     // [1, 2, 3, 4]
