function setUserName(username)
{
    console.log(this)
    this.username = username
    return this
}

console.log(setUserName())

function createUser(username , email , password)
{
    setUserName(username)
    this.email = email
    this.password = password
}

const chai = new createUser('chai','chai@fb.com','123')
console.log(chai)
