const nutshell = require("../nutShellDB")

let nutshellUserArray = nutshell().users[0].userId
console.log(nutshellUserArray)

    for (let index = 0; index < nutshellUserArray.length; index++) {
        const element = nutshellUserArray[index];
        console.log(element, "nutshellarray");
    }
