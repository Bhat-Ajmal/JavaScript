const accountId = 111
let accountEmail = "ajmal@Gmail.com"
var accountPassword = "123456"
accountCity = "Srinagar"
let accountState

// accountId = 23   not allowed
accountEmail = "ab@Google6.com"
accountPassword = "12344321"
accountCity = "Bengaluru"


console.log(accountId)

/*
prefer not to use var, bcz of issue in block scope and unctional scope
*/


console.log([accountId, accountEmail, accountPassword, accountCity, accountState])