 //Author Erin               //Purpose create new user based on info passed from welcome.js
 const uniqueId = require("./idGenerator")
 //-->userName
 //-->email
 // Create a new user object with userName and email
 let userId = uniqueId()

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