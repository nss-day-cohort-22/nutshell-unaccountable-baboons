//<(^ -^)>
//This page will add event listener to chat send message button to eventually write in the chat window
//Grab "chat__button" via query selector and assign to variable
const register = document.querySelector(".chat__button")

//add event listener to the button
register.addEventListener("click", (inputText) => {
    console.log("You clicked on chat");
    const chatInput = document.querySelector("input[name='chat_input']").value
    //add chat input to local storage
    chatInput(writeChatToLocalDatabse)
})



module.exports = register.addEventListener