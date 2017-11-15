const database = require("../nutShellDB")

//grabs div from HTML
let onlineUsers = document.getElementsByClassName("display_friends")[0]
//for loop to loop through nutshell database and display users that are logged in.
let displayFriends = function () {
const db = JSON.parse(localStorage.getItem("nutShellDB")) || {}
    if (db.users.length > 0) {
        for (let index = 0; index < db.users.length; index++) {
            const element = db.users[index];
            onlineUsers.innerHTML += `
            <h1>${element.username}</h1>
            `
            }
        }else {
        console.log("no current friends");
    }
}

module.exports = displayFriends