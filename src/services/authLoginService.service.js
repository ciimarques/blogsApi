const jwt = require('jsonwebtoken');
const connection = require('../models');

const { JWT_SECRET } = process.env; 

const authLoginService = {
  login: async (email, password) => {
    const user = await connection.User.findOne({ where: { email, password } });
    if (!user) {
      return undefined; 
    }
    const token = jwt.sign(
      {
        id: user.id,
        displayName: user.displayName,
        email: user.email,
        image: user.image,
      },
      JWT_SECRET,
    );

    return token;
  },
};

module.exports = authLoginService;