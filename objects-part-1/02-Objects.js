const mysym = Symbol("key1")

const jsUser = {
    name: "Anish",
    "full name": "Anish Kumar", // Key with space
    age: 20,
    mysym : "mykey1",
    location: "Indore",
    email:"dhari@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.mysym); // valid but not correct
console.log(typeof jsUser.mysym);



