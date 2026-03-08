function user(userName,password)
{
    this.userName = userName
    this.password = password

    return this
}

let userOne = new user("name",123)
console.log(userOne instanceof user) //true
let userTwo = user('name',123)
console.log(userTwo instanceof user) //false