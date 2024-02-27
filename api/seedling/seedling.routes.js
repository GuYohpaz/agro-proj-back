const express = require('express')
const { getSeedlings, getSeedlingById, addSeedling, removeSeedling } = require('./seedling.controller')
const router = express.Router()
const {log} = require('../../middlewares/logger.middleware')


router.get('/', getSeedlings)
router.get('/:id', getSeedlingById)
router.post('/', log, addSeedling)
router.delete('/:id', log, removeSeedling)

module.exports = router


