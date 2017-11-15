//Author: Erin

//Purpose:  Module to display task list

/* Required Files*/
const db = require("../nutShellDB")
const localInterface = require("../loadDatabase")

//Load Database
const loadDatabase = localInterface.load;
const database =loadDatabase();


//Create function to show task, requiring input of the database
const displayTasks = function (database){

        //conditional statement to target/retrieve the currentuser

        //Create const to get the input values of the task name and completion date... (Need class names and add class to input html)
        let tasks = database.tasks
        const taskListEl = document.getElementsByClassName("display_tasks")[0];
        //const length = tasks.length
        if (tasks > 0) {
        //Create a loop to cycle thru each task saved in database
        tasks.forEach(function(task){

            //Testing the loop...
            console.log("Yaay! The task loop is working");
            //Create a const named "taskListEl" to store the task display
            //console.log(length);

            //and post a check box, task name, and completion date
            taskListEl.innerHTML += `
                <li> <input type="checkbox" name="complete" value="${tasks[0].Task_ID}"> 
                ${tasks[0].Task_Name} ${tasks[0].Completion_Date} </li>
                `;
        });
        } else {
        console.log("you have no tasks");
            }
    }

    displayTasks(database);

    //Export module for display
    module.exports = displayTasks