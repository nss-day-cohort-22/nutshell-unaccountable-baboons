// Author Deanna - this module looks for the articles in local storage
// and displays it on the screen in the article section

//wrap in a function
const displayArticleList = function (database) {

        let existingArticles = database().articles
        console.log(database().articles)

        // Set up write option
        const articleEl = document.getElementById("display_articles")

        // See if chat messages exist in the local db
        console.log("length of article array", existingArticles.length)
        if (existingArticles.length > 0) {
            console.log("we have articles in localstorage")
            // Iterate through all the messages in the database to show them on the browser
            existingArticles.forEach(newsArticles => {
                console.log("articletitle", newsArticles.articleTitle)
                console.log("articleURL",newsArticles.articleURL)

                // Write messages and their related userids to the browser
                articleEl.innerHTML = ""
                articleEl.innerHTML +=
                    `
                <article>
                    <a href="${newsArticles.articleURL}"><p>${newsArticles.articleTitle}</p></a>
                </article>
                `
                //If there are no articles yet, display message
            })
        }
        else {
            console.log("no articles");
            articleEl.innerHTML =
                `
        <article>
        <p>Add some articles to read!</p>
        </article>
        `
        }
    }

    // look for new messages - add this later


    //export this module
    module.exports = displayArticleList