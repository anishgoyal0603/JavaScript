const mysym = Symbol("key1")

const jsUser = {
    name: "Anish",
    "full name": "Anish Kumar", // Key with space
    age: 20,
    [mysym] : "mykey1",
    location: "Indore",
    email:"dhari@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(jsUser) // mysym: 'mykey1',
jsUser.greeting = function(){
    console.log("Hello JS user");
    
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hellow Js user ${this["full name"]}`);
    console.log(`Hellow Js user ${this.name}`);
    
}
console.log(jsUser.greetingTwo());


