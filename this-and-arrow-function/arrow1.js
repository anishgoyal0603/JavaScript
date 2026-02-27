const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${username} welcome to website `); // ReferenceError: username is not defined
        console.log(this);
        
         
    }
};

user.welcomeMessage(); // Output: "hitesh just logged in"
user.username = "sam"
user.welcomeMessage(); // Output: "sam just logged in"
