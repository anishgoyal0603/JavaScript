const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} welcome to website `); 
        console.log(this);
        
         
    }
};

user.welcomeMessage(); // Output: "hitesh just logged in"
user.username = "sam"
user.welcomeMessage(); // Output: "sam just logged in"
console.log(this); // current global object is referring to empty object {}
