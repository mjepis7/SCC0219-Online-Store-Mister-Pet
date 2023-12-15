const express = require('express');
const multer = require('multer');

const routes = require('./routes');

const app = express();
const port = 3000;

const connectDB = require("./db_connection");

connectDB();

app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
