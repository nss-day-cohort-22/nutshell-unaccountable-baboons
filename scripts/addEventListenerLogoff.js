//author: Ray //Purpose This module adds event listener to logoff button and calls the logoffuser module
const logoffUser = require("./logoffUser")
const logoff = document.querySelector(".logoff__button")


//add event listener to the register button
logoff.addEventListener("click", (event) => {
//call the logoffUser module
logoffUser()

})