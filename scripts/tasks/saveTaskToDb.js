
//create const to store required modules
const database = require("../nutShellDB")
const saveDatabase = require("../saveDatabase")

//create function to add new task to database
const addTask = function(newTask) {
    let updatedDatabase = database()
    updatedDatabase.tasks.push(newTask)
    saveDatabase(updatedDatabase)
}

//export function addTask
module.exports = addTask