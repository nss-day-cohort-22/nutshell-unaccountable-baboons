const database = require("../nutShellDB")
const saveDatabase = require("../saveDatabase")

const addArticle = function(articles) {
    let updatedDatabase = database()
    updatedDatabase.articles.push(articles)
    saveDatabase(updatedDatabase)
}

module.exports = addArticle
