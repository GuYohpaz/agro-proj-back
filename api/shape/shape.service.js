const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')


async function query() {
    try {
        const collection = await dbService.getCollection('shape')
        var shapes = await collection.find().toArray()
        return shapes
    } catch (err) {
        throw err
    }
}


async function getById(shapeId) {
    try {
        const collection = await dbService.getCollection('shape')
        const shape = collection.findOne({ _id: shapeId })
      console.log(shape);
        return shape
    } catch (err) {

        logger.error(`while finding shape ${shapeId}`, err)
        throw err
    }
}


async function remove(shapeId) {
    try {

        const collection = await dbService.getCollection('shape')
        await collection.deleteOne({ _id: shapeId })
        return shapeId

    } catch (err) {

        logger.error(`cannot remove shape ${shapeId}`, err)
        throw err
    }
}


async function add(shape) {
    try {

        const collection = await dbService.getCollection('shape')
        const addedshape = await collection.insertOne(shape)
        return addedshape

    } catch (err) {

        logger.error('cannot insert shape', err)
        throw err
    }
}


module.exports = {
    remove,
    query,
    getById,
    add,
}