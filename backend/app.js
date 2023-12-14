const express = require('express');
const multer = require('multer');
const routes = require('./routes');

const app = express();
const port = 3000;

// Configuração do Multer para o upload da imagem
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
