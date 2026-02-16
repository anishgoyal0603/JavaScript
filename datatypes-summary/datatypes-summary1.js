// primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

// js is dynamically typed

const isLoggedIn = false
const outsideTemp = null

let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)
console.group(id === anotherId)

const bigNumber = 3456789212345654311n
console.log(bigNumber)

console.log(typeof score)
console.log(typeof scoreValue)

console.log(typeof isLoggedIn)
console.log(typeof outsideTemp)


console.log(typeof id)
console.log(typeof anotherId)    

console.log(typeof bigNumber)
