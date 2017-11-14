//Author: Erin

//Purpose:  Module to display task list

/* Required Files*/
const db = require("../nutShellDB")

//Create a const named "taskListEl" to store the task display
const taskListEl = document.getElementById("taskListElId");

//Create function to show task, requiring input of the database
const displayTasks = function (db){

    //Create const to get the input values of the task name and completion date... (Need class names and add class to input html)
    const tasks = db.tasks;
    const taskName = Task_Name.value;
    const completionDate = Completion_Date.value;
    const taskId = Task_Id.value;

    //Create const for length of tasks
    const length = db.tasks[0].length;

    //Create a loop to cycle thru each task saved in database OR have each task post at addEvent??

    for (i=0; i < length; i++){

        //and post a check box, task name, and completion date
        taskListEl.innerHTML += `<ul>
            <li> <input type="checkbox" name="complete" value="${tasks.taskId}"> ${tasks.taskName} + ${tasks.completionDate} </li>
            </ul>`;
    }
}



//Export module for display
module.exports = displayTasks