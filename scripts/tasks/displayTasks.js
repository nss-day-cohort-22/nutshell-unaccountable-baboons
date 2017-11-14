//Author: Erin

//Purpose:  Module to display task list

/* Required Files*/
const database = require("../nutShellDB")

//Create a const named "taskListEl" to start the task display
const taskListEl = document.getElementById("taskListElId");

//Create function to show task
const displayTask = function (){

    //Create a loop to cycle thru each task saved in database OR have each task post at addEvent??

    //Create const to get the input values of the task name and completion date... (Need class names and add class to input html)
    const taskNameEl = document.getElementsByClassName("taskNameInputClass").value;
    const completionDateEl = document.getElementsByClassName("completionDateInputClass").value;

    //and post a check box, task name, and completion date
    taskListEl.innerHTML = `<ul>
    <li> ${taskNameEl} + ${completionDateEl} </li>
    </ul>`;

}



//Export module for display
module.exports = displayTask