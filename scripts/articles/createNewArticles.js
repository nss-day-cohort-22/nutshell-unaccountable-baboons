//Author: Deanna Vickers This module will create the article objects

const idGenerator = require("../idGenerator")
const nutshell = require("../nutShellDB")

let db = nutshell();
lastIdUsed = db.articleId
const idMaker = idGenerator(lastIdUsed)

 const articleFactory = function (
     articleTitle, articleURL, articleDescription) {
    let date = Date.now()
    let articles = db.articles;
    let nextId;
    //sorting the users.  If there is no user in local storage, start at one.  Otherwise, look at the last user's userID in local storage and add one to create the new user ID.
    if (articles.length !== 0) {
      let sortedarticles = db.articles.sort((p,n) => n.articleId - p.articleId)
      nextId = idMaker.next().value;
    } else {
      nextId = idMaker.next().value;
    }

    return Object.create(null, {
        "articleId" : {
            value: nextId,
            enumerable: true
        },
        "articleTitle" : {
            value: articleTitle,
            enumerable: true
        },
        "articleURL" : {
            value: articleURL,
            enumerable: true
        },
        "articleDescription" : {
            value: articleDescription,
            enumerable: true
        },
        "timestamp" : {
            value: date,
            enumerable: true
        }
})
}

module.exports = articleFactory