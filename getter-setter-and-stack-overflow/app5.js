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
    this._password = value       // in database _password is stored as it is and if we are accessing it then it returns password in uppercase
   }
}

let u1 = new User("@","abc")
console.log(u1.password);
console.log(u1._password)

