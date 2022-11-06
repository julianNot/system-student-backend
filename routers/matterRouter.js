const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: 'Calculo',
  });
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    name: 'Materia ',
    id
  });
});

module.exports = router;
