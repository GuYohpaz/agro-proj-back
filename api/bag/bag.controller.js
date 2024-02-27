const bagService = require('./bag.service.js');
const logger = require('../../services/logger.service')


async function getBags(req, res) {
  try {
    var queryParams = req.query
    const bags = await bagService.query(queryParams)
    res.json(bags)
  } catch (err) {

    res.status(500).send({ err: 'Failed to get bags' })
  }
}


async function updateBagAmount(req, res) {
  try {
// all this shit was because i called for req.query rather req.body !!!!!! 
    const bag = req.body
    const result = await bagService.update(bag)
    res.json(result)

  } catch (err) {
    logger.error('Failed to update bag', err)
    res.status(500).send({ err: 'Failed to update bag' })
  }
}





module.exports = {
  getBags,
  updateBagAmount,

}
