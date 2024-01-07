const { postUpdated } = require('../services/postPut.service');

function isValidRequest(id, title, content) {
  return id && title && content;
}

function isUserAuthorized(post, userId) {
  return post && post.userId === userId;
}

async function updatedPost(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id;

  if (!isValidRequest(id, title, content)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const postUp = await postUpdated(id, title, content);
  
  if (!isUserAuthorized(postUp, userId)) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return res.status(200).json(postUp);
}

module.exports = {
  updatedPost,
};
