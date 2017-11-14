//author Ray //Purpose this module adds an event listener to the event buttons
const createNewEvent = require("./createNewEvent")
//grab the save event button
const saveEvent = document.querySelector(".button--saveEvent")

//add the eventlistener to the saveEvent button
saveEvent.addEventListener("click", (event) => {
    //grab the username and email entered into the form
    const eventName = document.querySelector("input[name='eventname']").value
    const eventDate = document.querySelector("input[name='eventDate']").value
    const eventLocation = document.querySelector("input[name='eventLocation']").value

    //pass the information to the event factory - create new event
    createNewEvent(eventName, eventDate, eventLocation)
})