const express = require('express');
const passport = require('passport')
const StudentsService = require('./../services/studentsService');
const router = express.Router();

const service = new StudentsService();

router.get('/', async (req, res) => {
  const students = await service.find(req.query);
  res.json(students);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const student = await service.findOne(id);
  res.json(student);
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const newStudent = await service.create(body);
    res.json(newStudent);
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
    const student = await service.update(id, body);
    res.json(student);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const student = await service.delete(id);
  res.json(student);
})

module.exports = router;
