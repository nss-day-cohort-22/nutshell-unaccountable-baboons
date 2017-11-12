//Author: Lissa, Erin   Purpose: Database interface function to load, save, and clear Nutshell Database

const nutshell = require("./nutShellDB")

const localInterface = Object.create(null, {
   "load": {
        value: () => JSON.parse(localStorage.getItem("nutShellDB")) || {}
   },
   "save": {
        value: db => localStorage.setItem("nutShellDB", JSON.stringify(db))
   },
   "clear": {
        value: () => localStorage.setItem("nutShellDB", JSON.stringify({}))
   }
})

module.exports = localInterface