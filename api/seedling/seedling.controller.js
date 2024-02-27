const seedlingService = require('./seedling.service.js');
const logger = require('../../services/logger.service')


// GET 
async function getSeedlings(req, res) {
  try {
    var queryParams = req.query
    const seedlings = await seedlingService.query(queryParams)
    res.json(seedlings)
  } catch (err) {

    logger.error('Failed to get seedlings', err)
    res.status(500).send({ err: 'Failed to get seedlings' })
  }
}

// GET BY ID 
async function getSeedlingById(req, res) {
  try {
    const seedlingId = req.params.id
    const seedling = await seedlingService.getById(seedlingId)
    res.json(seedling)
  } catch (err) {

    logger.error('Failed to get seedling', err)
    res.status(500).send({ err: 'Failed to get seedling' })
  }
}

// POST (add seedling)
async function addSeedling(req, res) {
  try {
    const seedling = req.body
    const addedseedling = await seedlingService.add(seedling)
    res.json(addedseedling)
  } catch (err) {

    logger.error('Failed to add seedling', err)
    res.status(500).send({ err: 'Failed to add seedling' })
  }
}



// DELETE (Remove seedling)
async function removeSeedling(req, res) {
  try {
    const seedlingId = req.params.id;
    const removedId = await seedlingService.remove(seedlingId)
    res.send(removedId)
  } catch (err) {

    logger.error('Failed to remove seedling', err)
    res.status(500).send({ err: 'Failed to remove seedling' })
  }
}





module.exports = {
  getSeedlings,
  getSeedlingById,
  addSeedling,
  removeSeedling
}
