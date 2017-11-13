//author Ray  //Purpose: This module adds event listeners to the register and login buttons on the welcome screen
const userFactory = require("./userFactory")
const addUser = require("./addUserToDatabase")
const setVisibility = require("./setVisibility")
const setActiveUser = require("./activeUser")
const validateExistingUser = require("./validateExistingUser")
const register = document.querySelector(".button--newAccount")
const login = document.querySelector(".button--login")
const chat = require("./chat/displayChatMessage")
const database = require("./nutShellDB")


//add event listener to the register button
register.addEventListener("click", (event) => {
    //grab the username and email entered into the form
    const username = document.querySelector("input[name='username']").value
    const email = document.querySelector("input[name='email']").value
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
    chat(database)
})


//add eventlistener to the login button
login.addEventListener("click", (event)=>{
    //grab the username and email from the login form
    const username = document.querySelector("input[name='username']").value
    const email = document.querySelector("input[name='email']").value
    //pass the username and email to the validateExistingUser Module \
    validateExistingUser(username, email)
   })