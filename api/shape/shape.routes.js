const express = require('express')
const { getShapes, getShapeById, addShape, removeShape } = require('./shape.controller')
const router = express.Router()
const {log} = require('../../middlewares/logger.middleware')


router.get('/', log, getShapes)
router.get('/:id', getShapeById)
router.post('/', log, addShape)
router.delete('/:id', removeShape)

module.exports = router