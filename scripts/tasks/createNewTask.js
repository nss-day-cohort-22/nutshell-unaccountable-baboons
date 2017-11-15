 //Author:  Erin

 //Purpose: Create new task object to save info passed from addEventHandlerTasks.js
 const nutshell = require("../nutShellDB")
 const idGenerator = require("../idGenerator")
 let lastId = 0

 // Create a new task object with taskName and completion date
 const taskFactory = function (taskName, completionDate) {
     let db = nutshell();
     let idMaker = idGenerator(lastId)
    //
    let tasks = db.tasks;
    let nextId;
    //sorting the users.  If there is no user in local storage, start at one.  Otherwise, look at the last user's userID in local storage and add one to create the new user ID.
    if (tasks.length !== 0) {
      let sortedtasks = db.tasks.sort((p,n) => n.taskId - p.taskId)
    nextId = idGenerator(sortedtasks[0].Task_ID)
    } else if (tasks.length === 0) {
      nextId = idGenerator(0).next().value;
    }

     return Object.create(null, {
         "Task_ID" : {
            value: nextId,
            enumerable: true
         },
         "Task_Name" : {
             value: taskName,
             enumerable: true
         },
         "Completion_Date" : {
             value: completionDate,
             enumerable: true
         },
         "Complete": {
             value: false,
             enumerable: true
         }
     })
 }

 module.exports = taskFactory
