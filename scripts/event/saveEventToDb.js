//author Ray //purpose this module takes a new event and saves it to the database
const database = require("../nutShellDB")
const saveDatabase = require("../saveDatabase")

const addEvent = function(user) {
    let updatedDatabase = database()
    updatedDatabase.events.push(user)
    saveDatabase(updatedDatabase)
}

module.exports = addEvent