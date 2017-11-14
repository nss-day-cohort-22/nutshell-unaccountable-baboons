// Author: Deanna Vickers
// This page will add event listener to the save article button
const articleFactory = require("./createNewArticles")
const addArticleToDatabase = require("./saveArticleToDb")
const database = require("../nutShellDB")
const article = require("./displayArticles")


//Assign save article button to variable
const saveArticleButton = document.querySelector(".article__button")



//Add event listener to the button
saveArticleButton.addEventListener("click", (event) => {
    console.log("article event handler button");
    const newTitleInput = document.querySelector("input[name='articleTitle']").value;
    const newUrlInput = document.querySelector("input[name='articleUrl']").value;
    const newDescriptionInput = document.querySelector("input[name='articleDescription']").value;
    console.log("Article Title:", newTitleInput);
    //Collect article input
    const newArticle = articleFactory(newTitleInput, newUrlInput, newDescriptionInput);
    //Add article input to local storage
    addArticleToDatabase(newArticle);
    article(database)
})



module.exports = saveArticleButton.addEventListener