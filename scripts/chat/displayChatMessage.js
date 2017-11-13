// Author Deanna - this module looks for the messages in local storage
// and displays it on the screen in the chat history

// get the other modules that will be used in this module
const database = require("./nutShellDB");

// see if chat messages exist in the local db
if (database !== null){
    console.log("we have localstorage")
    // get db out of local storage
    const existingMessages = JSON.parse(localStorage.getItem("database"))

    // set up write option
    const chatEl = document.getElementById("chatMessages");

    // iterate through all the messages in the database to show them on the browser
    existingMessages.forEach(function messages (message, userID){
        console.log(message);
        console.log(userID);
        // write messages and their related userids to the browser
        chatEl.innerHTML +=
            `
            <article class = "chats">
                <p>${existingMessages.userID}</p>
                <p>${existingMessages.message} </p>
            `
});
 //if there are no chats yet display message
}else{
    `
    <article class = "chats">
    <p>There are no chat messages yet</p>
    </article>
    `
}


// look for new messages - add this later

//export this module
module.exports = messages

