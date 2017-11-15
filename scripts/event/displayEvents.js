//author Ray //purpose the purpose of this module is to display events in the database on the DOM
database = require("../nutShellDB")
let displayEvents = function(){
    //grab the html Element that wil display events
    const  eventsEl = document.getElementById("display_events")
    //grab the events array from the database
    let events = database().events
    let eventString = ""
    eventsEl.innerHTML = ""
    //iterate over each entry in the database and build up dom sting
    events.forEach(currentEvent => {
        //create opening article tag that holds the event Id
        eventString += `<article class="event_article" id="eventId-${currentEvent.eventId}">`
        //populate the dom String with relevent event information
        eventString += `<section class="event__Name">Event:${currentEvent.eventName}</section>
                    <section class="event__Date">Date:${currentEvent.eventDate}</section>
                    <section class="event__Location">Location:${currentEvent.eventLocation}</section>`
        //generate the closing article tag
        eventString += "</article>"
        //write the eventString to the dom
    })
    eventsEl.innerHTML += eventString
}
module.exports = displayEvents