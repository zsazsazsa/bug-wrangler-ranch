const { database, cattleToDrive } = require("./database.js")

const hireDrovers = (herdSize) => {
    const drovers = []
    const allDrovers = database.drovers
    const numberNeeded = cattleToDrive / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
            drovers.push(allDrovers[randomHerderId])
           
    }

    const noDuplicateDrovers = [...new Set(drovers)]
    return noDuplicateDrovers
}

module.exports = { hireDrovers }