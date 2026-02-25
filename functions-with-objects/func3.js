
const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyObject) {
      console.log(`${anyObject.username} just logged in`);
      return `${anyObject.username} paid rupees ${anyObject.price}`;
  }

handleObject(user)
handleObject({
    username : "sam",
    price : 399
})  

