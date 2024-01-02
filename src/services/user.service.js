const jwt = require('jsonwebtoken');
const connection = require('../models');

const { JWT_SECRET } = process.env; 

async function userCreate({ email, password, displayName, image }) {
  const userExisting = await connection.User.findOne({ where: { email } });
  if (userExisting) throw new Error('User already registered');
  const newUser = await connection.User.create({
    email, password, displayName, image,
  });
  const token = jwt.sign(
    {
      id: newUser.id,
      displayName: newUser.displayName,
      email: newUser.email,
      image: newUser.image,
    },
    JWT_SECRET,
  );
  return token;
}

async function userGet() {
  const user = await connection.User.findAll({
    attributes: { exclude: ['password'] } });
  return user;
}
async function userById(id) { 
  const user = await connection.User.findByPk(id, {
    attributes: { exclude: ['password'] } });
  return user;
}

module.exports = {
  userCreate,
  userGet,
  userById,
};
