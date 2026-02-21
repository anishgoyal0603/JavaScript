// slice splice

myArr = [0,1,2,3,4,5]
console.log("A",myArr);

const myn1 = myArr.slice(1,3) // 1 is inclusive and 3 is exclusive

console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3) // both inclusive

console.log(myn2)
console.log("C",myArr) // removes extracted portion 

