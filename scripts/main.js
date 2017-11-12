const setVisibility = require("./setVisibility")
const addeventlisteners = require("./addeventlisteners")
const localInterface = require("./loadDatabase")

setVisibility(document.querySelector(".login"), "show")
const loadNutshell = localInterface.load("nutShellDB")