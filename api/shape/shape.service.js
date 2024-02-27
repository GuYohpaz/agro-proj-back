const dbService = require('../../services/db.service')
// const ObjectId = require('mongodb').ObjectId
const logger = require('../../services/logger.service')


async function query(filterBy) {
    // const criteria = _buildCriteria(filterBy)
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

// async function calculateTotalShapesCapacity() {

//     const shapes = await query()
//     const totalShapesCapacity = shapes.reduce((accumulator, shape) => {

//         return accumulator + shape.capacity

//     }, 0)

//     return totalShapesCapacity
// }


// async function restartDataBase() {
//     const shapes = await query()
//     console.log(shapes);

//     for (let i = 0; i < shapes.length; i++) {
//         const shape = shapes[i];
//         console.log(shape);
//         if (shape.capacity > 0) {

//             const collection = await dbService.getCollection('shape')
//             await collection.deleteOne({ _id: ObjectId(shape._id) })


//         }
//     }
// }



module.exports = {
    remove,
    query,
    getById,
    add,
    // restartDataBase
}