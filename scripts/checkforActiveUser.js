//author Ray //purpose this module will check to see if there is already an active user in session storage,
             //if there is it will display nutshell if not it will display the login page
//start reqire modules
const setVisibility = require("./setVisibility")
const chat = require("./chat/displayChatMessage")
const events = require("./event/displayEvents")
const database = require("./nutShellDB")
const article = require("./articles/displayArticles")
const displayOnline = require("./Friends/displayfriends")
const displayTasks = require("./tasks/displayTasks")
const databse = require("./nutShellDB")
//end require modules
//grab activeUser from sessionStorage
const activeUser = JSON.parse(sessionStorage.getItem("activeUser"))
checkforActiveUser = function (){
    //if activeUser is not null -hide login form, load database and display all modules
    if(activeUser !== null){
        setVisibility(document.querySelector(".login"), "hide")
        chat(database)
        events(database)
        article(database)
        displayOnline(database)
        displayTasks(database)
        setVisibility(document.querySelector(".grid"), "show")

    } else {
        //if no activeUser then show the login screen
        setVisibility(document.querySelector(".login"), "show")
    }
}
module.exports = checkforActiveUser