function user(username,loginCount,isLoggedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this
}

const userOne = user("hitesh",12,true)
const usertwo = user("ChaiAurCode",11,false)
console.log(userOne)
console.log(usertwo)

const userThree = new user("pillu",12,true)
const userFour = new user("pillu",12,true)
console.log(userThree);
console.log(userFour);
console.log(userThree === userFour); // false
console.log(userThree == userFour); // false





