const users = [
      { id: 1, email: "h@gmail.com" },
      { id: 2, email: "k@gmail.com" },
  ];

console.log(users[0].email);
const tinderUser = new Object() // singleton

tinderUser.id = "abc123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//console.log(tinderUser.hasOwnProperty(isLoggedIn)); // ReferenceError: isLoggedIn is not defined


  
  