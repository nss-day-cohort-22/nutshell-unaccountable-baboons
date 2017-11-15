const getActiveUser = function(user){
    sessionStorage.getItem("activeUser", JSON.parse(user.userId))
    return user.userId
}

module.exports = getActiveUser