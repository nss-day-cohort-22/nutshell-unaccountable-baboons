 //Author Erin               //Purpose create new user based on info passed from welcome.js
 const idGenerator = require("./idGenerator")
 const nutshell = require("./nutShellDB")
 //-->userName
 //-->email
 // Create a new user object with userName and email
 let db = nutshell();

 const userFactory = function (username, email) {

    let users = db.users;
    let nextId;
    //sorting the users.  If there is no user in local storage, start at one.  Otherwise, look at the last user's userID in local storage and add one to create the new user ID.
    if (users.length !== 0) {
      let sortedUsers = db.users.sort((p,n) => n.userId - p.userId)
      nextId = idGenerator(sortedUsers[0].userId).next().value;
    } else {
      nextId = idGenerator(0).next().value;
    }

     return Object.create(null, {
         "userId" : {
             value: nextId,
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