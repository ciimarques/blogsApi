const express = require('express');
const authLoginController = require('./controller/authLoginController');
const userController = require('./controller/userController');
const validateToken = require('./middleware/validToken');
const categoriesController = require('./controller/categoriesController');
const blogpostController = require('./controller/blogpostController');
const postPutController = require('./controller/postPutController');

// ....

const app = express();
app.use(express.json());

app.post('/login', authLoginController.login);
app.post('/user', userController.createUser);
app.post('/categories', validateToken, categoriesController.createCategory);
app.post('/post', validateToken, blogpostController.createPost);
app.get('/user', validateToken, userController.getAllUsers);
app.get('/categories', validateToken, categoriesController.getAllCategories);
app.get('/post', validateToken, blogpostController.getAllPost);
app.get('/user/:id', validateToken, userController.getUserById);
app.get('/post/:id', validateToken, blogpostController.getPostById);
app.put('/post/:id', validateToken, postPutController.updatedPost);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
