const { postCreate, postGetAll } = require('../services/blogpost.service');

async function createPost(req, res) {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    res.status(400).json({
      message: 'Some required fields are missing',
    });
    return;
  }
  try {
    const newPost = await postCreate(title, content, req.user.id, categoryIds);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAllPost(_req, res) {
  const post = await postGetAll();
  res.status(200).json(post);
}

module.exports = {
  createPost,
  getAllPost,
};