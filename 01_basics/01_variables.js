// const accountId
// accountId = 10 error
const accountId = 144553 // have to declare and initialize simultaneosly
let accountEmail = "anish@google.com"
var accountPassword = "12345"
accoutCity = "Jaipur"
let accountState

//accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accoutCity = "Bengaluru"

/* 
prefer not to use var , because of issue in block scope and functional scope
*/

console.log(accountId) 
console.table([accountId,accountEmail,accountPassword,accoutCity,accountState])

//output->
// ┌─────────┬─────────────┐
// │ (index) │ Values      │
// ├─────────┼─────────────┤
// │ 0       │ 144553      │
// │ 1       │ 'hc@hc.com' │
// │ 2       │ '21212121'  │
// │ 3       │ 'Bengaluru' │
// │ 4       │ undefined   │
// └─────────┴─────────────┘