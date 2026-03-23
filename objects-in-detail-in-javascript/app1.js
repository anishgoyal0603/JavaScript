let pi = Math.PI
console.log(pi)
console.log(Math.floor(pi));
console.log(Math.ceil(pi))

//const descripter = Object.getOwnPropertyDescriptor(Math,PI) // error

const descripter = Object.getOwnPropertyDescriptor(Math,"Pi") // no error is shown , have to give exact name only keep in track property or function names , uppercase must be uppercase and lowercase must be lowercase

console.log(descripter) // but output is undefined

