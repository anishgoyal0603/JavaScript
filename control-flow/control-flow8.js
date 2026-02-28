const userLoggedIn = true
const DebitCard = true
let loggedInFromGoogle = false
let loggedInFromEmail = true

if( userLoggedIn && DebitCard && 2==2 )
{
    console.log("Allow to buy course 1");  
}

if( userLoggedIn && DebitCard && 2==3 )
{
    console.log("Allow to buy course 2");  
}

if (loggedInFromGoogle || loggedInFromEmail)
{
        console.log("User logged in");
           
}