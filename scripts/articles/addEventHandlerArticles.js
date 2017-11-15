// Author: Deanna Vickers
// This page will add event listener to the save article button
const articleFactory = require("./createNewArticles")
const addArticleToDatabase = require("./saveArticleToDb")
const database = require("../nutShellDB")
const article = require("./displayArticles")
const setVisibility = require("../setVisibility")


//Assign save article button to variable
const saveArticleButton = document.querySelector(".article__button")

//grab the new article button
const newArticleBtn = document.querySelector(".display_articleForm")

//grab article form
const articleForm = document.querySelector(".articleForm")

newArticleBtn.addEventListener("click", (event) => {
  // hide button
  setVisibility(newArticleBtn, "hide")
  // show form
  setVisibility(articleForm, "show")
})
//Add event listener to the button
saveArticleButton.addEventListener("click", (event) => {
  console.log("Article save button is working.");
  const newTitleInput = document.querySelector("input[name='articleTitle']").value;
  const newUrlInput = document.querySelector("input[name='articleUrl']").value;
  const newDescriptionInput = document.querySelector("input[name='articleDescription']").value;
  console.log("Article Title:", newTitleInput);
  // Collect article input
  const newArticle = articleFactory(newTitleInput, newUrlInput, newDescriptionInput);
  // Add article input to local storage
  addArticleToDatabase(newArticle);
  article(database)
  //hide form
  setVisibility(articleForm, "hide")
  //show new article button under displayed articles
  setVisibility(newArticleBtn, "show")
})



module.exports = saveArticleButton.addEventListener

