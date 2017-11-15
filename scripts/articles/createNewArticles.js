//Author: Deanna Vickers This module will create the article objects

//Bring in the data we need for this module
const idGenerator = require("../idGenerator")
const nutshell = require("../nutShellDB")
const activeUser = require("../activeUser")

//Assign database to a variable so we can use it here
let db = nutshell();

//Generate ID's for the articles
lastIdUsed = db.articleId
const idMaker = idGenerator(lastIdUsed)

//Set up article factory to create article objects
const articleFactory = function (
    articleTitle, articleURL, articleDescription) {
    let date = Date.now()
    let articles = db.articles;
    let nextId;
    //Get user array
    let currentUserId = JSON.parse(sessionStorage.getItem("activeUser"));

    //Sorting the articles.  If there is no article in local storage, start at one.  Otherwise, look at the last user's articleID in local storage and add one to create the new articleID.
    if (articles.length !== 0) {
        let sortedArticles = db.articles.sort((p, n) => n.articleId - p.articleId)
        nextId = idGenerator(sortedArticles[0].articleId).next().value;
    } else {
        nextId = idGenerator(0).next().value;
    }

    //Create the object for each article
    return Object.create(null, {
        "articleId": {
            value: nextId,
            enumerable: true
        },
        "userId": {
            value: currentUserId.userId,
            enumerable: true
        },
        "articleTitle": {
            value: articleTitle,
            enumerable: true
        },
        "articleURL": {
            value: articleURL,
            enumerable: true
        },
        "articleDescription": {
            value: articleDescription,
            enumerable: true
        },
        "timestamp": {
            value: date,
            enumerable: true
        }
    })
}

module.exports = articleFactory