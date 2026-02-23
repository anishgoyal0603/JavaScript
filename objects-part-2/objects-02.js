const regularUser = {
    email: "some@gmail.com" ,
    fullName : {
        userFullName : {
            firstname : "hitesh",
            lastname : "choudhary" 
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName.firstname);
