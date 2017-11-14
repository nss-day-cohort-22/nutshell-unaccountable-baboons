//author Ray //purpose the purpose of this module is to display events in the database on the DOM
//module requirements
const database = require("../nutShellDB")
//end module requirements

let displayEvents = function(database){
    //grab the html Element that wil display events
    const  eventsEl = document.querySelector(".events")
    //grab the events array from the database
    let events = database.events
    console.log("events array =",events)
    //iterate over the events array and display in the dom
    events.forEach(currentEvent => {
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