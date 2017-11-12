 //Author: Kevin          Purpose: This module will be used by multiple modules to create a unique ID
 const IdGenerator = function* (lastIdUsed = 0) {
    let uniqueId = 1

    while (true) {
        yield uniqueId + lastIdUsed
        uniqueId++
    }
}

module.exports = IdGenerator