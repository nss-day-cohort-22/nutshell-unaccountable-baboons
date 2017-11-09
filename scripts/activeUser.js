const setActiveUser = function(user){
    sessionStorage.setItem("activeUser", JSON.stringify(user))
}

module.exports = setActiveUser