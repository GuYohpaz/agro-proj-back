const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const { ObjectId } = require('mongodb')



async function query() {

    try {
        const collection = await dbService.getCollection('bag')
        var bags = await collection.find().toArray()
        return bags
    } catch (err) {
        throw err
    }
}

// Fix 
async function update(bag) {

    try {
logger.info(bag)
        var id = new ObjectId(bag._id)
        const collection = await dbService.getCollection('bag')
        await collection.updateOne({ _id: id }, { $set: { amount: bag.amount } })
        logger.info('the bag', bag)
    } catch (err) {

        logger.error(`cannot update bag ${bag._id}`, err)
        throw err
    }
}



module.exports = {

    query,
    update,

}