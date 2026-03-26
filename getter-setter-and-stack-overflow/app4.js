class User{
    constructor(email,password)
   {
           this.email = email
           this.password = password
   }

   get password()
   {
    return this._password.toUpperCase()
   }

   set password(value){
    this._password = value.toUpperCase() // in database _password is stored as in upperCase and if we are accessing it then it returns the same uppercase value
   }
}

let u1 = new User("@",123)
