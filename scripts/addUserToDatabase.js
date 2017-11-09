const getDatabase = require("./nutShellDB")

const addUser = function(user) {
    getDatabase.users.push(user)
}

module.exports = addUser