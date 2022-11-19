const express = require('express');
const InscriptionsService = require('./../services/inscriptionsService');
const router = express.Router();

const service = new InscriptionsService();

router.get('/', async (req, res) => {
  const inscription = await service.find(req.query);
  res.json(inscription);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const inscription = await service.findOne(id);
  res.json(inscription);
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const newInscription = await service.create(body);
    res.json(newInscription);
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
    const inscription = await service.update(id, body);
    res.json(inscription);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const inscription = await service.delete(id);
  res.json(inscription);
})

module.exports = router;
