

const createUser = (num1 , num2) =>  {username: "hitesh"}  // ❌ Undefined
console.log(createUser(1,2))

const createUserCorrect = (num1 , num2) =>  ({username: "hitesh"})  // correct to use parenthesis
console.log(createUserCorrect(1,2))

const createUserAnotherCorrectMethod = (num1 , num2) =>  {
   return {username: "hitesh"}
}  // correct to use parenthesis
console.log(createUserAnotherCorrectMethod(1,2))

myArr = [2,5,3,7,8]
myArr.forEach(() => {})


