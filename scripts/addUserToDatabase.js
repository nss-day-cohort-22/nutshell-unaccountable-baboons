const database = require("./nutShellDB")
const saveDatabase = require("./saveDatabase")

const addUser = function(user) {
    let updatedDatabase = database()
    updatedDatabase.users.push(user)
    saveDatabase(updatedDatabase)
}

module.exports = addUser