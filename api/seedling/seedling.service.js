const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')


async function query() {
    try {
        const collection = await dbService.getCollection('seedling')
        var seedlings = await collection.find().toArray()
        return seedlings
    } catch (err) {
        throw err
    }
}


async function getById(seedlingId) {
    try {
        const collection = await dbService.getCollection('seedling')
        const seedling = collection.findOne({ _id: seedlingId })
        return seedling

    } catch (err) {
        logger.error(`while finding seedling ${seedlingId}`, err)
        throw err
    }
}


async function remove(seedlingId) {
    try {
        const collection = await dbService.getCollection('seedling')
        await collection.deleteOne( { _id: seedlingId })
        logger.info(`removing seedling ${seedlingId}`)
        return seedlingId
    } catch (err) {
        logger.error(`cannot remove seedling ${seedlingId}`, err)
        throw err
    }
}


async function add(seedling) {
    try {

        const collection = await dbService.getCollection('seedling')
        const addedseedling = await collection.insertOne(seedling)
        return addedseedling

    } catch (err) {

        logger.error('cannot insert seedling', err)
        throw err
    }
}


module.exports = {
    query,
    getById,
    remove,
    add
}