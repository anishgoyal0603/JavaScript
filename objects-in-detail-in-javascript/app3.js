const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,'name'))
//Object.defineProperties(chai,)
console.log(Object.getOwnPropertyDescriptors(chai,"name")); // no error is shown , the syntax of using it is wrong
console.log(Object.getOwnPropertyDescriptors(chai)) // correct syntax


