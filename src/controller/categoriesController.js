const categoryCreate = require('../services/categories.service');

async function createCategory(req, res) {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: '"name" is required' });
    return;
  }
  const newCategory = await categoryCreate(name);
  res.status(201).json(newCategory);
}

module.exports = { 
  createCategory,
};