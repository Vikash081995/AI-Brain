const express = require('express');
const router = express.Router();

// GET all places
router.get('/', (req, res) => {
  res.json({ message: 'Get all places' });
});

// GET place by id
router.get('/:id', (req, res) => {
  res.json({ message: 'Get place by id', id: req.params.id });
});

// CREATE new place
router.post('/', (req, res) => {
  const { title, description } = req.body;
  res.json({ message: 'Create new place', title, description });
});

// UPDATE place
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'Update place', id });
});

// DELETE place
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'Delete place', id });
});

module.exports = router;