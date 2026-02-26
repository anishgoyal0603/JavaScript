let a = 10; // Outer (Global)
  
  if (true) {
      let a = 300; // Inner (Block Scope) - Shadows outer
      console.log(a); // 300 (Uses inner)
  }
  
  console.log(a); // 10 (Outer unaffected)