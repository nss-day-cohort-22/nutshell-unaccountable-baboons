const saveDatabase = function (database) {
    localStorage.setItem("NutShellDB",JSON.stringify(database))
}
module.exports = saveDatabase