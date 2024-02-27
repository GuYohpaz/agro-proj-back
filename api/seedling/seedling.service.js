const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')


async function query(filterBy) {
    // const criteria = _buildCriteria(filterBy)
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


// async function calculateSeedlingsCapacity() {

//     var capacitySumResult = 0
//     var amountSumResult = 0
//     var seedlingsCapacity = 0
//     var seedlings = await query()
//     var totalShapesCapacity = await shapesService.calculateTotalShapesCapacity()

//     if (seedlings.length > 0) {
//         seedlings.map(seedling => {

//             if (seedling.capacity) {
//                 capacitySumResult += +seedling.capacity
//             }


//             if (seedling.amount) {
//                 amountSumResult += +seedling.amount
//             }

//             return seedlingsCapacity = amountSumResult * capacitySumResult
//         })

//     }

//     return seedlingsCapacity

// }


// async function restartSeedlingsDataBase() {
//     const seedlings = await query()
//     console.log(seedlings);

//     for (let i = 0; i < seedlings.length; i++) {
//         const seedling = seedlings[i];
//         console.log(seedling);
//         if (seedling.capacity > 0) {

//             storageService.remove('seedling', seedling._id)

//         }
//     }
// }

module.exports = {
    query,
    getById,
    remove,
    add
}