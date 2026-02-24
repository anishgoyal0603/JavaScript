function loginUserMessage(username) {
    if (username === 'undefined') // invalid doesn't wrok , no error but don't use '' in undefined{
      {
        console.log("Please enter a username");
        return;
      }
  
  if (username === undefined) // invalid doesn't wrok , no error but don't use '' in undefined{
    {     console.log("Please enter a username");
          return;
    }
  
      return `${username} just logged in`;
}  
  loginUserMessage()
  console.log(loginUserMessage());
  
  console.log(loginUserMessage("hitesh")); // "hitesh just logged in"