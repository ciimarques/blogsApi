const connection = require('../models');

const postUpdated = async (id, title, content) => {
  const [updatedPost] = await connection.BlogPost.update(
    { title, content },
    { where: { id } },
  );
  if (updatedPost > 0) {
    const post = await connection.BlogPost.findByPk(id, {
      include: [
        {
          model: connection.User, as: 'user', attributes: { exclude: ['password'] },
        },
        {
          model: connection.Category, as: 'categories', through: { attributes: [] }, 
        },
      ],
    });
    return post;
  }
  return null; 
};

module.exports = {
  postUpdated,
};