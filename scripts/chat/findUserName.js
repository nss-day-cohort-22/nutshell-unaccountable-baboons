const database = require("../nutShellDB")

//This array looks at the current database and sees who is posting the chat message.  It then displays their username next to their chat message in the DOM.
const findUserName = function(match) {
    const existingUsers = database().users
    console.log(existingUsers, "existingUsers");
    let user = existingUsers.find(userObj => {
        return userObj.userId === match
    })
    //console.log(user.username, "chatusername");
    return user.username
}

module.exports = findUserName
