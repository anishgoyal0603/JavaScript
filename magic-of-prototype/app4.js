function createUser(username,score)
{
    this.username = username
    this.score = score
}


console.log(createUser.prototype) // {}
console.log(createUser.__proto__) // {}
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is  ${this.score}`)
}


console.log(createUser.prototype) // { increment: [Function (anonymous)}
console.log(createUser.__proto__);

let u1 =  new createUser("name1",1)
let u2 = new createUser("name2",2)
console.log(u1.prototype) //undefined
console.log(u1.__proto__) // { increment: [Function (anonymous)], printMe: [Function (anonymous)] }
console.log(u1.__proto__ === createUser.prototype) //true
