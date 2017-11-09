//Author: Kevin          Purpose: This module will be used by multiple modules to create a unique ID
const IdGenerator = function* () {
    let uniqueId = 1

    while (true) {
        yield uniqueId
        uniqueId += 1
    }
}

module.exports = IdGenerator