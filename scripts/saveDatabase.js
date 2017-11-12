const saveDatabase = function (db) {
    localStorage.setItem("nutShellDB", JSON.stringify(db))
}
module.exports = saveDatabase