const myArr = [1,2,3]

console.log(myArr[0])
//console.log(myArr(0)) // TypeError: myArr is not a function

const element = myArr.pop(1,2,3,4,5) // no effect if we pass multiple arguments as it removes and returns last 
                                     // element only
console.log(element,myArr)

const ele = myArr.shift(1,2,3)// no effect if we pass multiple arguments as it removes and returns last 
                                     // first only
console.log(ele,myArr)
