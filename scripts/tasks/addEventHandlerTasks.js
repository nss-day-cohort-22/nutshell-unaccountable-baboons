//Author: Erin

//Purpose: This page will add event listener to tasks add/update task button to post a task
const setVisibility = require("./setVisibility")
const taskFactory = require("./createNewTask")
const addTask = require("./saveTaskToDb")


//Grab "display_taskForm" via query selector and assign to variable
const newTaskButton = document.querySelector(".display_taskForm")
const taskButton = document.querySelector(".task__button")
const taskForm = document.querySelector(".taskForm")

newTaskButton.addEventListener("click", (event) => {
    // hide button
    setVisibility(newTaskButton, "hide")
    // show form
    setVisibility(taskForm, "show")
})

//Grab "task__button" via query selector and assign to variable

//add event listener to the task button
taskButton.addEventListener("click", (inputTask) => {

    //Verify the button is working by logging to console
    console.log("You added/updated a task");

    //Telling the listener where to listen for click
    const completionDate = document.querySelector("input[name='completion']").value
    const taskName = document.querySelector("input[name='taskname']").value
    const newTask = taskFactory(taskName, completionDate)

    //add new task to local storage
    addTask(newTask)

    //hide form
    setVisibility(taskForm, "hide")
    //show new task button under displayed tasks
    setVisibility(newTaskButton, "show")
    //display new task??

})


module.exports = taskButton.addEventListener