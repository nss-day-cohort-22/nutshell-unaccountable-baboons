//Author Erin               //Purpose create new user based on info passed from welcome.js
const uniqueId = require("scripts/idGenerator")
const nutshellDB = require("scripts/nutshellDB")
const welcome = require("scripts/welcome.js")
//-->userName
//-->email
// Create a new user object with userName and email
let userId = idGenerator()

const userFactory = function (username, email) {
    return Object.create(null, {
        "userId" : {
            value: userId.next().value,
            enumerable: true
        },
        "username" : {
            value: username,
            enumerable: true
        },
        "email" : {
            value: email,
            enumerable: true
        }
    })
}
module.exports = userFactory
