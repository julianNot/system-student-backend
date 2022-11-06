const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: 'julian',
  });
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    name: 'julian',
    id
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

router.get('/inscriptions', (req, res) => {
  const { limit, offset } = req.query;
  if( limit && offset) {
    res.json({
      name: 'Inscriptions limitadas',
    });
  }
  res.send("No hay parametros")
});

module.exports = router;
