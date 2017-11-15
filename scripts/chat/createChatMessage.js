const idGenerator = require("../idGenerator")
const nutshell = require("../nutShellDB")
const activeUser = require("../activeUser")
let lastid = 0

let newActive = sessionStorage.getItem("activeUser")



const chatFactory = function (chatInput) {
    let db = nutshell();
    let idMaker = idGenerator(lastid)
    let chat = db.chat
    let parseSession = JSON.parse(sessionStorage.getItem("activeUser"))
    let userChatId = parseSession.userId
    let userName = parseSession.username
    let date = Date.now()
    //let chat = db.chat;
    let nextId;
    //sorting the users.  If there is no user in local storage, start at one.  Otherwise, look at the last user's userID in local storage and add one to create the new user ID.
    if (chat.length !== 0) {
      let sortedchat = db.chat.sort((p,n) => n.chatId - p.chatId)
      nextId = idGenerator(sortedchat[0].chatId).next().value;
    } else {
      nextId = idGenerator(0).next().value;
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