const getDatabase = require("./nutShellDB")
const saveDatabase = require("./saveDatabase")

const addUser = function(user) {
    updatedatabase = getDatabase()
    console.log(updatedatabase)
    updatedatabase.users.push(user)
    saveDatabase(updatedatabase)
}

module.exports = addUser