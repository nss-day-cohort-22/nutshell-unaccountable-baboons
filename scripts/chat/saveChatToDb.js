const database = require("../nutShellDB")
const saveDatabase = require("../saveDatabase")

const addChat = function(chat) {
    let updatedDatabase = database()
    updatedDatabase.chat.push(chat)
    saveDatabase(updatedDatabase)
}

module.exports = addChat

