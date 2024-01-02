const express = require('express');
const authLoginController = require('./controller/authLoginController');
const userController = require('./controller/userController');
const validateToken = require('./middleware/validToken');
const categoriesController = require('./controller/categoriesController');

// ....

const app = express();
app.use(express.json());

app.post('/login', authLoginController.login);
app.post('/user', userController.createUser);
app.post('/categories', validateToken, categoriesController.createCategory);
app.get('/user', validateToken, userController.getAllUsers);
app.get('/categories', validateToken, categoriesController.getAllCategories);
app.get('/user/:id', validateToken, userController.getUserById);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
