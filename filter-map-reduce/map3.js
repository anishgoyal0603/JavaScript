const nums = [
    {num1 : 10, num2 : 20},
    {num1 : 30, num2 : 40}
]

const numsModified = nums.map((obj) => {  obj.num1 += 10 ;
    return obj;
});
console.log(numsModified);