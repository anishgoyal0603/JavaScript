class User{
    constructor(email,password)
    {
        this.email = email
        this.password = password
    }

    set password(value){
        this._password = value
    }
}

let u1 = new User('@',123)
u1.password = "StrongPassword"
console.log(u1._password)
