//valid
function setUserName(username)
{
    console.log(this)
    this.username = username
    return this
};


function createUser(username , email , password)
{
    const ref = setUserName.call(this,username)
    console.log(ref === this)
    this.email = email
    this.password = password
};

const chai = new createUser('chai','chai@fb.com','123')
console.log(chai)
