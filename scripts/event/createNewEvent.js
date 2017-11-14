//author Ray Purpose: this module will create a new event and push it into the database
const nutshell = require("../nutShellDB")
const idGenerator = require("../idGenerator")

let db = nutshell();
lastIdUsed = db.eventId
const idMaker = idGenerator(lastIdUsed)

// Create a new task object with taskName and completion date
const taskFactory = function (taskName, completionDate) {
   //
   let events = db.events;
   let nextId;
   //sorting the users.  If there is no user in local storage, start at one.  Otherwise, look at the last user's userID in local storage and add one to create the new user ID.
   if (events.length !== 0) {
     let sortedtasks = db.tasks.sort((p,n) => n.taskId - p.taskId)
     nextId = idMaker.next().value;
   } else {
     nextId = idMaker.next().value;
   }

    return Object.create(null, {
        "eventId" : {
           value: nextId,
           enumerable: true
        },
        "userId": {
            value: JSON.parse(sessionStorage.getItem("activeUser")),
            enumerable : true
        },
        "eventName" : {
            value: eventName,
            enumerable: true
        },
        "eventDate" : {
            value: eventDate,
            enumerable: true
        },
        "eventLocation": {
            value: eventLocation,
            enumerable: true
        }
    })
}

module.exports = createNewEvent