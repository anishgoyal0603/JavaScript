let myArr = [10,20,30,40,50]

let [...a] = myArr // Array destructing

let [i1,i2,i3,...i4] = myArr
console.log(i1,i2,i3,i4)

console.log(a);
console.log(...myArr)
