for (var i = 0; i < 3; i++) {
    // logic...
}
console.log(i); // Output: 3 
// 'i' leaked out of the loop! It still exists in memory.

// Using LET
for (let j = 0; j < 3; j++) {
    // logic...
}
console.log(j); // Error: j is not defined
// 'j' was destroyed when the loop ended. Correct behavior.
