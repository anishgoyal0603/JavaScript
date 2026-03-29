

let user = {
    _email : 'h@hc.com',
    _password : 'abc',

    get email()
    {
      return this._email.toUpperCase()
    },

    set email(value)
    {
      this._email = value
    }
}

//const tea = Object.create() error
const tea = Object.create(user)
console.log(tea.email) //H@HC.COM
console.log(tea._email); // h@hc.com
