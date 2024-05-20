const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    const cattleBreeds = []
    const types = database.cattleTypes

    for (let counter = 0; counter < herdSize; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal)
    }
    for (const cattleBreed of cattle) {
        cattleBreeds.push(cattleBreed.breed)
    }
    return cattleBreeds
}

module.exports = { roundup }