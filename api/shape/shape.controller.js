const shapeService = require('./shape.service.js');
const logger = require('../../services/logger.service')


// GET 
async function getShapes(req, res) {
  try {
    var queryParams = req.query
    const shapes = await shapeService.query(queryParams)
    res.json(shapes)
  } catch (err) {
    
    logger.error('Failed to get shape', err)
    res.status(500).send({ err: 'Failed to get shapes' })
  }
}

// GET BY ID 
async function getShapeById(req, res) {
  try {
    const shapeId = req.params.id
    const shape = await shapeService.getById(shapeId)
    console.log(shape);
    res.json(shape)
  } catch (err) {

    logger.error('Failed to get shape', err)
    res.status(500).send({ err: 'Failed to get shape' })
  }
}

// POST (add shape)
async function addShape(req, res) {
  try {
    const shape = req.body
    console.log(shape);
    const addedshape = await shapeService.add(shape)
    res.json(addedshape)
  } catch (err) {

    logger.error('Failed to add shape', err)
    res.status(500).send({ err: 'Failed to add shape' })
  }
}



// DELETE (Remove shape)
async function removeShape(req, res) {
  try {
    const shapeId = req.params.id;
    const removedId = await shapeService.remove(shapeId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove shape', err)
    res.status(500).send({ err: 'Failed to remove shape' })
  }
}




module.exports = {
  getShapes,
  getShapeById,
  addShape,
  removeShape
}
