const express = require('express');
const multer = require('multer');

const routes = require('./routes');

const app = express();
const port = 3001;

const connectDB = require("./db_connection");

connectDB();

var cors = require("cors");
app.use(cors());
app.use('/', cors(), routes);


app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
