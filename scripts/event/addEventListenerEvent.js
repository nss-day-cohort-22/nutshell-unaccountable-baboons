//author Ray //Purpose this module adds an event listener to the event buttons
const createNewEvent = require("./createNewEvent")
const addEvent = require("./saveEventToDb")
//grab the save event button
const saveEvent = document.querySelector(".event__button")

//add the eventlistener to the saveEvent button
saveEvent.addEventListener("click", (event) => {
    console.log("We pushed Save Event")
    //grab the username and email entered into the form
    const eventName = document.querySelector("input[name='eventname']").value
    const eventDate = document.querySelector("input[name='eventDate']").value
    const eventLocation = document.querySelector("input[name='eventLocation']").value

    //pass the information to the event factory - create new event
  let newEvent =   createNewEvent(eventName, eventDate, eventLocation)
    addEvent(newEvent)
})
module.exports = saveEvent.addEventListener