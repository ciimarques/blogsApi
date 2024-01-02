const userCreate = require('../services/user.service');

function validName(displayName, res) {
  if (displayName.length < 8) {
    res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
    return false;
  }
  return true;
}

function validEmail(email, res) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({
      message: '"email" must be a valid email',
    });
    return false;
  }
  return true;
}

function validPassword(password, res) {
  if (password.length < 6) {
    res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
    return false;
  }
  return true;
}

async function createUser(req, res) {
  const { email, password, displayName, image } = req.body;
  if (!validName(displayName, res)) return;
  if (!validEmail(email, res)) return;
  if (!validPassword(password, res)) return;
  
  try {
    const token = await userCreate({ email, password, displayName, image });
    res.status(201).json({ token });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

module.exports = {
  createUser,
};
