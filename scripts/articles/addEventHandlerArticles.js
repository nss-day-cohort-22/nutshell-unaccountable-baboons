const setVisibility = require("../setVisibility")

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

/* !!! This needs to be added to the eventhandler for articles!!!


  //hide form
  setVisibility(eventForm, "hide")
  //show new event button under displayed tasks
  setVisibility(newEvent, "show")


*/