//Author Ray   //Purpose This function is called when a new user clicks on the "Register" button on the welcome form.
const database = require("./nutShellDB")
const setActiveUser = require("./activeUser")
const setVisibility = require("./setVisibility")
const userFactory = require("./userFactory")
const addUser = require("./addUserToDatabase")
//this variable will dictate what messages are displayed to the user
let found = false
let existing = false
const validateNewUser = (username, email) => {
    //first check and see if they have entered anything in the input fields
    if (username === "" || email === ""){ //FIRST IF START
        console.log("everything is blank (the beginning)")
        //if the username and or email fields are blank - send message to user
        alert("Sorry, the name and email fields cannot be blank please check them and try again!")

        } //END OF SECOND IF
            else //BEGIN SECOND IF - ELSE
               { //grab the user array from the database
                let nutshell = database()
                let existingUsers = nutshell.users
                //check to see if there are any users to iterate over first
                    if (existingUsers.length < 1){ //SECOND IF START
                        console.log("there are no users in the database - creating one")
                        //if no users exist, create the user and add it to the database
                        const newUser = userFactory(username, email)
                        addUser(newUser)
                        //hide authorization form
                        const formEl = document.querySelector(".login")
                        setVisibility(formEl , "hide")
                        //unhide nutshell app
                        const appEl = document.querySelector(".grid")
                        setVisibility(appEl, "show")
                        //set current user as active user
                        setActiveUser(newUser)

                } else {
                    existing = true
                     //if there are users in the database, iterate over them
                console.log("There are users in the database - lets look at them")
                for (let i = 0; i < existingUsers.length ; i++) {
                //check each username and email to see if it already exists
                const currentUser = existingUsers[i]
                console.log("we are about to look through existing users")
                if(currentUser.username === username || currentUser.email === email){
                    //if either username or email exist already set found to true
                    console.log("i found a match! in the existing users")
                    found = true
                }
            }

        }
    } //END OF FIRST IF
    if (found === true){
        console.log("stuff is true")
        alert("Sorry that username or email are already taken, please try a new one")
        found = false
    } else  if((username !== "" || email !== "") && existing === true){
        console.log("i didn't find an existing user, so I guess ill make one and set it active")
        //if the requested new user and email do not exist in the database add the newUser to the database
        const newUser = userFactory(username, email)
        addUser(newUser)
        //hide authorization form
        const formEl = document.querySelector(".login")
        setVisibility(formEl , "hide")
        //unhide nutshell app
        const appEl = document.querySelector(".grid")
        setVisibility(appEl, "show")
        //set current user as active user
        setActiveUser(newUser)}

}
module.exports = validateNewUser

//When user clicks on "Register"
//Validate that userName DOES NOT exist && Validate that email DOES NOT exist
// if DOES NOT EXIST - return userName and email - pass to userFactory.js
// display dashboard
// ELSE - display error message on welcome screen i.e. userName / email already exist
