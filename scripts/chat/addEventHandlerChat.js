//<(^ -^)>
const chatFactory = require("./createChatMessage")
const addChatToDatabase = require("./saveChatToDb")
const callChat = require("./displayChatMessage")
const chat = require("./displayChatMessage")
const database = require("../nutShellDB")


//This page will add event listener to chat send message button to eventually write in the chat window
//Grab "chat__button" via query selector and assign to variable
const chatButton = document.querySelector(".chat__button")


//add event listener to the button
chatButton.addEventListener("click", (event) => {
    console.log("You clicked on chat");
    const newChatInput = document.getElementsByClassName("newChatInput")[0].value
    console.log(newChatInput)
    //pass chat input through chat factory
    const newChat = chatFactory(newChatInput)
    //add chat input to local storage
    addChatToDatabase(newChat)
    chat(database);
})



module.exports = chatButton.addEventListener