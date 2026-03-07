// programming paradigm

const user = {
    username : "hitesh",
    logincount: 8,
    signedin : true,
    getUserDetails : function()
    {
        console.log("Got user details from database")
        console.log(`username: ${this.username}`); // if we simply use username without any user or this , then it shows error
         console.log(`username: ${user.username}`);
         console.log(this)
        
    }
}

console.log(user.username) // hitesh
console.log(user.getUserDetails) // [Function: getUserDetails]
console.log(user.getUserDetails()) 
console.log(this) // {}
// but printing on console in browser console.log(this) , it gives window object