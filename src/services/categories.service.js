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

module.exports = categoryCreate;