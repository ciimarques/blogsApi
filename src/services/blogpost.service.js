const { Op } = require('sequelize');
const connection = require('../models');

async function postCreate(title, content, userId, categoryIds) {
  const categories = await connection.Category.findAll({ 
    where: {
      id: {
        [Op.in]: categoryIds,
      },
    },
  });
  if (categories.length !== categoryIds.length) {
    throw new Error('one or more "categoryIds" not found');
  }
  const newPost = await connection.BlogPost.create({
    title, content, userId, updated: Date(), published: Date(),
  });
  await connection.PostCategory.bulkCreate(categoryIds
    .map((categoryId) => ({ postId: newPost.id, categoryId }
    )));
  return newPost;
}
async function postGetAll() {
  const blogpost = await connection.BlogPost.findAll({
    include: [
      {
        model: connection.User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: connection.Category, as: 'categories', through: { attributes: [] }, 
      },
    ],
  });
  return blogpost;
}

module.exports = {
  postCreate,
  postGetAll,
};
