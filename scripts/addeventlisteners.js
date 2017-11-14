//author Ray  //Purpose: This module adds event listeners to the register and login buttons on the welcome screen
const userFactory = require("./userFactory")
const addUser = require("./addUserToDatabase")
const setVisibility = require("./setVisibility")
const setActiveUser = require("./activeUser")
const validateExistingUser = require("./validateExistingUser")
const validateNewUser = require("./validateNewUser")
const register = document.querySelector(".button--newAccount")
const login = document.querySelector(".button--login")
const chat = require("./chat/displayChatMessage")
const database = require("./nutShellDB")
const article = require("./articles/displayArticles")


//add event listener to the register button
register.addEventListener("click", (event) => {
    //grab the username and email entered into the form
    const username = document.querySelector("input[name='username']").value
    const email = document.querySelector("input[name='email']").value
    //pass the username and email to the validateNewUser function when the register button is pressed.
    validateNewUser(username, email)
    chat(database)
    article(database)
})


//add eventlistener to the login button
login.addEventListener("click", (event)=>{
    //grab the username and email from the login form
    const username = document.querySelector("input[name='username']").value
    const email = document.querySelector("input[name='email']").value
    //pass the username and email to the validateExistingUser Module \
    validateExistingUser(username, email)
    chat(database)
    article(database)
})