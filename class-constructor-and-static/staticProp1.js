class User{
    constructor(username){
        this.username = username
    }

    logMe()
    {
        console.log(`Username: ${this.username}`);
    }
    static createId()
    {
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh) // User { username: 'hitesh' }
//console.log(hitesh.createId()); // TypeError: hitesh.createId is not a function

class Teacher extends User{
    constructor(username,email)
    {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone) // Teacher { username: 'iphone', email: 'i@phone.com' }
iphone.logMe()
//console.log(iphone.createId()); // TypeError: iphone.createId is not a function



