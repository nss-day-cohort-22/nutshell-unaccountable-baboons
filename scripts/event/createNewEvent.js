//author Ray Purpose: this module will create a new event and push it into the database
const nutshell = require("../nutShellDB")
const idGenerator = require("../idGenerator")

let database = nutshell();

const idMaker = idGenerator()

// Create a new task object with taskName and completion date
const createNewEvent = function (eventName, eventDate, eventLocation) {
   //
   let events = db.events;
   let nextId;
   //sorting the events.  If there is no event in local storage, start at one.  Otherwise, look at the last events eventId in local storage and add one to create the new event ID.
   if (events.length !== 0) {
     let sortedevents = db.events.sort((p,n) => n.eventId - p.eventId)
     nextId = idMaker.next().value;
   } else {
     nextId = idMaker.next().value;
   }

    return Object.create(null, {
        "eventId" : {
           value: nextId,
           enumerable: true
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
        },
        "userID": {
            value: //jsonparse from session storage
        }
    })
}

module.exports = createNewEvent