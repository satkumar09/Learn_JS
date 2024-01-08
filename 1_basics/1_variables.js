const accountId = 144553
let accountEmail = "satya@google.com"
var accountPassword = "12345"
let accountState
accountCity = "Asansol" // possible to declare without const, let, var but not reccomended

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Jaipur"

console.log(accountId)

// Prefer not to use var
// because of issue in block scope and functional scope

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // prints in tabular form