function user(username,loginCount,isLoggedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
            console.log(`Welcome ${this.username}`)
    }
    return this;
}

const userOne = new user("hitesh",12,true)
const userTwo = new user("ChaiAurCode",11,false)
console.log(userOne.constructor) // [Function: user]
const userThree = user("hitesh",13,false)
console.log(userThree.constructor) // [Function: Object]