function loginUserMessage(username = "sam") {
    if (!username)
    {
        console.log("Please enter a username")
        return
    }
  
      return `${username} just logged in`;
}  
  loginUserMessage()
  console.log(loginUserMessage());
  
  console.log(loginUserMessage("hitesh")); // "hitesh just logged in"