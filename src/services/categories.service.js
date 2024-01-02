const connection = require('../models');

async function categoryCreate(name) {
  const newCategory = await connection.Category.create({
    name,
  });
  return {
    id: newCategory.id,
    name,
  };
}

async function categoriesGetAll() {
  const categories = await connection.Category.findAll();
  return categories;
}

module.exports = {
  categoryCreate,
  categoriesGetAll,
};