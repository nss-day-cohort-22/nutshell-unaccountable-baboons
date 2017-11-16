//Author Ray   //Purpose This function is called when an existing user clicks on the "Login" button on the welcome form. It will search through the users database and find an object that contains the same user and email or it will display a prompt on the screen
const database = require("./nutShellDB")
const setActiveUser = require("./activeUser")
const setVisibility = require("./setVisibility")
//this variable will dictate what messages are displayed to the user
let found = false
const validateExistingUser = (username, email) => {
    //first check and see if they have entered anything in the input fields
    if (username || email !== ""){
        //grab the user array from the database
        let nutshell = database()
        let existingUsers = nutshell.users
        //iterate over each of the existing Users
        for (let i = 0; i < existingUsers.length; i++){
            let currentUser = existingUsers[i]
            if (currentUser.username === username && currentUser.email === email){
               found = true
               //set current user as active user
               setActiveUser(currentUser)
               //hide authorization form
               const formEl = document.querySelector(".login")
               setVisibility(formEl , "hide")
               //unhide nutshell app
               const appEl = document.querySelector(".grid")
               setVisibility(appEl, "show")
               //unhide logoff button
               const logoffEl = document.querySelector(".logoff__button")
               setVisibility(logoffEl,"show")
            }
        }
        //if user is not found - display message to user
        if (found === false){
            alert("Sorry, we could not find your username and/or email in our system, please try again!")
        }
    }else{
        //if user leaves username or email blank display message to user
        alert("Sorry the username and or email cannot be blank, please try again")
    }
}
module.exports = validateExistingUser