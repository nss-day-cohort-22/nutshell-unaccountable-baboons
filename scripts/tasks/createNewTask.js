 //Author:  Erin

 //Purpose: Create new task object with info passed from addEventHandlerTasks.js
 const nutshell = require("../nutShellDB")
 const idGenerator = require("../idGenerator")

 let db = nutshell();
 lastIdUsed = db.Task_Id
 const idMaker = idGenerator(lastIdUsed)

 // Create a new task object with taskName and completion date
 const taskFactory = function (taskName, completionDate) {
    //
    let tasks = db.tasks;
    let nextId;
    //sorting the users.  If there is no user in local storage, start at one.  Otherwise, look at the last user's userID in local storage and add one to create the new user ID.
    if (tasks.length !== 0) {
      let sortedtasks = db.tasks.sort((p,n) => n.taskId - p.taskId)
      nextId = idMaker.next().value;
    } else {
      nextId = idMaker.next().value;
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
