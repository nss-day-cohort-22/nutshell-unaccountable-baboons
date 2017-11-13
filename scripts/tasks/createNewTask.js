 //Author:  Erin

 //Purpose: Create new task object with info passed from addEventHandlerTasks.js
 const nutshell = require("../nutShellDB")
 const idGenerator = require("../idGenerator")

 let db = nutshell();

 // Create a new task object with taskName and completion date
 const taskFactory = function (taskName, completionDate) {
    //
    let tasks = db.tasks;
    let nextId;

    //sorting the tasks.  If there is no tasks in local storage, start at one.  Otherwise, look at the last assigned ID in local storage and add one to create the new ID.

    if (tasks.length !== 0) {
      let sortedTasks = db.tasks.sort((p,n) => n.taskId - p.taskId)
      nextId = idGenerator(sortedTasks[0].taskId).next().value;
    } else {
      nextId = idGenerator(0).next().value;
    }

     return Object.create(null, {
         "Task_Name" : {
             value: taskName,
             enumerable: true
         },
         "Completion_Date" : {
             value: completionDate,
             enumerable: true
         }
     })
 }
 module.exports = taskFactory