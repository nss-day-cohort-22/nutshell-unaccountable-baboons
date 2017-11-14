//author Ray //purpose the purpose of this module is to display events in the database on the DOM
//module requirements
const database = require("../nutShellDB")
//const finduser = require(".") FIND USER ID MODULE
//end module requirements

let displayEvents = function(database){
    //grab the html Element that wil display events
    const  eventsEl = document.querySelector(".events")
    //grab the events array from the database
    let events = database.events
    //use the finduserId module to locate the user
    // currentUserId = finduser()
    let filteredEvents = events.filter(obj => obj.userID === currentUserId)

    console.log("events array =",filteredEvents)
    //iterate over the events array and display in the dom
    filteredEvents.forEach(currentEvent => {
        //create opening article tag that holds the event Id
        eventString += `<article class="events__article" ID = "eventId-${currentEvent.eventId}">`
        //populate the dom String with relevent event information
        eventString += `<section class="eventName">${currentEvent.eventName}</section>
                    <section class="eventDate">${currentEvent.eventDate}</section>
                    <section class="articleLocation">${currentEvent.eventLocation}</section>`
        //generate the closing article tag
        eventString += "</article>"
        //write the eventString to the dom
        eventsEl.innerHTML += eventString
    })

}
module.exports = displayEvents