const express = require('express');
const MattersService = require('./../services/mattersService');
const router = express.Router();

const service = new MattersService();

router.get('/', async (req, res) => {
  const matters = await service.find(req.query);
  res.json(matters);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const matter = await service.findOne(id);
  res.json(matter);
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const newMatter = await service.create(body);
    res.json(newMatter);
  } catch (error) {
    res.status(401).json({
      message: error.message
    })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const matter = await service.update(id, body);
    res.json(matter);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const matter = await service.delete(id);
  res.json(matter);
})

module.exports = router;
