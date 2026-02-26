function one() {
      const username = "hitesh";
      
      function two() {
          const website = "youtube";
          console.log(username); // Can access parent's username
      }
      //console.log(website);  // error
      
      two(); // Execute inner function
  }
  
  one(); // Execute outer function

  if (true) {
      const userName = "hitesh"; // (Different from outer userName, shadowing)
      if (userName === "hitesh")
     {
         const website = "youtube";
         console.log(userName + website);
     }
      console.log(userName); // "hitesh" (inner, not outer)
      console.log(website); // "❌ Error: website is not defined
  }
  
  console.log(website); // ❌ Error: username is not defined