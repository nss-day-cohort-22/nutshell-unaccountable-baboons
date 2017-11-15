//author Ray Purpose: this module will create a new event and push it into the database
const nutshell = require("../nutShellDB")
const idGenerator = require("../idGenerator")
let lastid = 0




// Create a new task object with taskName and completion date
const createNewEvent = function (eventName, eventDate, eventLocation) {
   let db = nutshell()
   let idMaker = idGenerator(lastid)
   let events = db.events;
   console.log("these are the events",events)
   let nextId;

   let currentUserId = JSON.parse(sessionStorage.getItem("activeUser"))
   //sorting the users.  If there is no user in local storage, start at one.  Otherwise, look at the last user's userID in local storage and add one to create the new user ID.
   if (events.length !== 0) {
    let sortedEvents = db.events.sort((p,n) => n.eventId - p.eventId)
    console.log("these are the sorted events",sortedEvents)

    nextId = idGenerator(sortedEvents[0].eventId).next().value;
        console.log("this is what i've decided the last Id is",lastid)
   } else if(events.length === 0) {
    nextId = idGenerator(0).next().value;

    }



    return Object.create(null, {
        "eventId" : {
           value: nextId,
           enumerable: true
        },
        "userId": {
            value: currentUserId.userId,
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