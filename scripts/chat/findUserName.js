const database = require("../nutShellDB")


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
