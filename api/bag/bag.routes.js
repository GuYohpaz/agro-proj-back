const express = require('express')
const { getBags, updateBagAmount } = require('./bag.controller')
const router = express.Router()
const {log} = require('../../middlewares/logger.middleware')


router.get('/', getBags)
router.put('/:id', log, updateBagAmount)

module.exports = router