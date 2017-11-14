//author Ray //Purpose this module adds an event listener to the event buttons
const setVisibility = require("../setVisibility")
const createNewEvent = require("./createNewEvent")
const addEvent = require("./saveEventToDb")

//grab the save event button
const saveEvent = document.querySelector(".event__button")

//grab new event button
const newEvent = document.querySelector(".display_eventForm")

//grab event form
const eventForm = document.querySelector(".eventForm")

//add the eventlistener to the saveEvent button
newEvent.addEventListener("click", (event) => {
  // hide button
  setVisibility(newEvent, "hide")
  // show form
  setVisibility(eventForm, "show")
})

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

  //hide form
  setVisibility(eventForm, "hide")
  //show new event button under displayed tasks
  setVisibility(newEvent, "show")
})
module.exports = saveEvent.addEventListener