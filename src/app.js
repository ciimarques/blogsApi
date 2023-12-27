const express = require('express');
const authLoginController = require('./controller/authLoginController');

// ....

const app = express();
app.use(express.json());

app.post('/login', authLoginController.login);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
