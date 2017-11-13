//Author Ray   //Purpose This function is called when a new user clicks on the "Register" button on the welcome form.
const database = require("./nutShellDB")
const setActiveUser = require("./activeUser")
const setVisibility = require("./setVisibility")
const userFactory = require("./userFactory")
const addUser = require("./addUserToDatabase")
//this variable will dictate what messages are displayed to the user
let found = false
const validateNewUser = (username, email) => {
    //first check and see if they have entered anything in the input fields
    if (username || email !== ""){
        //grab the user array from the database
        let nutshell = database()
        let existingUsers = nutshell.users
        //iterate over each of the existing Users
        for (let i = 0; i < existingUsers.length; i++){
            let currentUser = existingUsers[i]
            if (currentUser.username === username || currentUser.email === email){
                //if the username or email are aleady in the users array set the found variable equal to true
                found = true

            }else {
                //pass the username and email to the userFactory -- lines 16-28 this will be moved to the newUserValidation module eventually.
                const newUser = userFactory(username, email)
                //add user to database
                addUser(newUser)
                //hide authorization form
                const formEl = document.querySelector(".login")
                setVisibility(formEl , "hide")
                //unhide nutshell app
                const appEl = document.querySelector(".grid")
                setVisibility(appEl, "show")
                //set current user as active user
                setActiveUser(newUser)
            }
        }
        //if user is found - display message to user
        if (found === true){
            alert("Sorry, we could not find your username and/or email in our system, please try again!")
        }
    }else{
        //if user leaves username or email blank display message to user
        alert("Sorry the username and or email cannot be blank, please try again")
    }
}
module.exports = validateNewUser

//When user clicks on "Register"
//Validate that userName DOES NOT exist && Validate that email DOES NOT exist
// if DOES NOT EXIST - return userName and email - pass to userFactory.js
// display dashboard
// ELSE - display error message on welcome screen i.e. userName / email already exist
