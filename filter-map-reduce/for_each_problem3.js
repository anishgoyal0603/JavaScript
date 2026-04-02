const nums = [1,2,3];

const arr = nums.forEach((num) => {
    num += 10;
    console.log(num);
    return num;
})

console.log(nums); // [1, 2, 3]
console.log(arr); // undefined