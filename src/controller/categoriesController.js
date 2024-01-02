const { categoryCreate, categoriesGetAll } = require('../services/categories.service');

async function createCategory(req, res) {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: '"name" is required' });
    return;
  }
  const newCategory = await categoryCreate(name);
  res.status(201).json(newCategory);
}

async function getAllCategories(_req, res) {
  const categories = await categoriesGetAll();
  res.status(200).json(categories);
}

module.exports = { 
  createCategory,
  getAllCategories,
};