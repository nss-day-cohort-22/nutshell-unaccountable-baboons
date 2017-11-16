//author Ray //purpose this module when called will clear sessionStorage, hide nutshell and show the login screen

//Start require statements
const setVisibility = require("./setVisibility")

//end require statements
const userLogOff = () => {
//clear sessionStorage
sessionStorage.clear()
//hide grid
setVisibility(document.querySelector(".grid"), "hide")
//hide logoff button
setVisibility(document.querySelector(".logoff__button"), "hide")
//show nutshell
setVisibility(document.querySelector(".login"), "show")
}
module.exports = userLogOff