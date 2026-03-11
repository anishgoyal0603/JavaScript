class User {
    // 1. Initialize immediately
    score = 100; 

    // 2. Initialize with calculation
    creationTime = new Date(); 
}

const u1 = new User();

// ✅ IT IS HERE: Attached to the object 'u1'
console.log(u1.score); // 100

// ❌ IT IS NOT HERE: Not in global scope
console.log(global.score); // undefined
//console.log(score); // ReferenceError: score is not defined