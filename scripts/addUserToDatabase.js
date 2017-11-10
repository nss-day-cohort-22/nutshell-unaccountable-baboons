const getDatabase = require("./nutShellDB")
const localInterface = require("./loadDatabase")

const addUser = function(user) {
    getDatabase.users.push(user)
    localInterface.save(getDatabase)
}

module.exports = addUser