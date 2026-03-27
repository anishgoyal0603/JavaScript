class User{
    constructor(email,password)
   {
           this.email = email
           this.password = password
   }

   get email()
   {
    return this._email.toUpperCase()
   }

   set email(value) 
   {
    this._email = value
   }
   get password()
   {
    return this._password.toUpperCase()
   }

   set password(value){
    this._password = value       
   }

//    function get email()   error
//    {
//     return this_email;
//    }

//    function set email(value) error
//    {
//     this_email = value
//    }
}

let u1 = new User("@","abc")
