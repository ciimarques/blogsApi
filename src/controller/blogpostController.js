const { postCreate, postGetAll, postById } = require('../services/blogpost.service');

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

async function getPostById(req, res) {
  const { id } = req.params;
  const postId = await postById(id);
  if (postId) {
    res.status(200).json(postId);
  } else {
    res.status(404).json({ message: 'Post does not exist' });
  }
}

module.exports = {
  createPost,
  getAllPost,
  getPostById,
};