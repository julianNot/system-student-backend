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

module.exports = router;
