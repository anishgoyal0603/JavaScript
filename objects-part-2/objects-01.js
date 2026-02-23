const tinderUser = new Object() // singleton
console.log(tinderUser); // {}  

tinderUser.id = "abc123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const obj = {}
console.log(obj); // {} non-singleton


