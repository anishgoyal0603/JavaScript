let huge = 9007199254740995n; // Notice the 'n' at the end
let bigMath = huge + 1n;      // You can only do math with other BigInts
//let bigint = new BigInt() // Special Rule: You CANNOT use new BigInt(). It throws an error.
// let bigint = BigInt() // TypeError: Cannot convert undefined to a BigInt
let bigint = BigInt(50)

console.log(typeof huge)
console.log(typeof bigMath)
console.log(bigint)
console.log(typeof bigint)


// 2. Conversion / Creation
const bigVal = BigInt(9007199254740991);
const bigVal2 = BigInt("12345678901234567890");

console.log(typeof bigVal); // "bigint" (Primitive)

// 3. To get an actual Object (Rare)
const obj = Object(10n); // Wraps it in a generic object