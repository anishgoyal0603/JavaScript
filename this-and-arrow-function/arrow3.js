function chai() {
    let username = "hitesh"
    console.log(this.username); // undefined
    
      console.log(this);
      console.log(typeof this); // object
      
  }
  chai(); // Output: Global object (empty {} in Node.js or window in browser)
  console.log(typeof this); // object
  