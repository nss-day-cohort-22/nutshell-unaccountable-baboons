const idGenerator = require("../idGenerator")
const nutshell = require("../nutShellDB")
const activeUser = require("../activeUser")


let newActive = sessionStorage.getItem("activeUser")

let db = nutshell();
lastIdUsed = db.chatId
const idMaker = idGenerator(lastIdUsed)

 const chatFactory = function (chatInput) {
    let parseSession = JSON.parse(sessionStorage.getItem("activeUser"))
    let userChatId = parseSession.userId
    let date = Date.now()
    let chat = db.chat;
    let nextId;
    //sorting the users.  If there is no user in local storage, start at one.  Otherwise, look at the last user's userID in local storage and add one to create the new user ID.
    if (chat.length !== 0) {
      let sortedchat = db.chat.sort((p,n) => n.chatId - p.chatId)
      nextId = idMaker.next().value;
    } else {
      nextId = idMaker.next().value;
    }

    return Object.create(null, {
        "chatId" : {
            value: nextId,
            enumerable: true
        },
        "userId" : {
            value: userChatId,
            enumerable: true
        },
        "chatInput" : {
            value: chatInput,
            enumerable: true
        },
        "timestamp" : {
            value: date,
            enumerable: true
        }
})
}

module.exports = chatFactory