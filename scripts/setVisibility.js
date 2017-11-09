const setVisibility = function (targetEl, action){
    if (action === "hide"){
        targetEl.classList.add("hidden")
    }else if (action === "show"){
        targetEl.classList.remove("hidden")
    }
}
module.exports = setVisibility