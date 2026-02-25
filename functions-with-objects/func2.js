function calculateCartPrice(val1, val2, ...num1) {
    return {val1, val2, num1};
}

console.log(calculateCartPrice(200, 400, 500, 2000, 260)); 
// Output: {val1: 200, val2: 400, num1: [500, 2000, 260]}