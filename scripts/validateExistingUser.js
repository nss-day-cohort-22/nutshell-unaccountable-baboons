//Author Ray   //Purpose This function is called when an existing user clicks on the "Login" button on the welcome form. It will search through the users database and find an object that contains the same user and email or it will display a prompt on the screen
const database = require("./nutShellDB")
const setActiveUser = require("./activeUser")
const setVisibility = require("./setVisibility")
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
            }
        }
        if (found === false){
            alert("Sorry, we could not find your username and/or email in our system, please try again!")
        }
    }else{
        alert("Sorry the username and or email cannot be blank, please try again")
    }





        /* existingUsers.forEach(user => {
            console.log("user",user.username , user.email)
            //check if the username and email in the existingusers array match the entered data
            if (user.username === username && user.email === email){
                //if found, set the user to the active user
                console.log("user found")
                setActiveUser(user)
            } else {
                console.log("sorry not found")
                //alert("Sorry we were unable to find that username/email in our system, please verify and try again")
            }
        })
    } else {
        alert("Sorry, the username and or email cannot be blank, please try again")
    } */
}
module.exports = validateExistingUser
//When user clicks on "LOGIN"
//Validate that userName exists && Validate that email exist
// if exists - retrieve user information
// display dashboard
// ELSE - display error message on welcome screen