const express = require('express');
const authLoginController = require('./controller/authLoginController');
const userController = require('./controller/userController');
const validateToken = require('./middleware/validToken');

// ....

const app = express();
app.use(express.json());

app.post('/login', authLoginController.login);
app.post('/user', userController.createUser);
app.get('/user', validateToken, userController.getAllUsers);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
