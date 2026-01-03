let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

 isLoggedIn = 0
 booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

 isLoggedIn = ""
 booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

 isLoggedIn = "Anish"
 booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// "" => false
// "Anish" => true