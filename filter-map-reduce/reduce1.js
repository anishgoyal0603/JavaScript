const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
},0); // 0 is initial value

const myTotal1 = myNums.reduce((acc, curr) => acc + curr, 0);

const nums = [10, 20, 30];


const sum = nums.reduce((acc, curr) => {
    console.log(`Acc: ${acc}, Curr: ${curr}`);
    return acc + curr;
}); // NO Initial Value
console.log(myTotal);
console.log(myTotal1);

