// módulo db_connection.js

const { MongoClient } = require('mongodb');

// URL de conexão com o banco de dados MongoDB
const mongoURI = 'mongodb://localhost:27017/mister_pet_db';

// Função para conectar ao banco de dados
async function connectDB() {
  try {
    const cliente = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    await cliente.connect();
    console.log('Conectado ao banco de dados');
    return cliente.db(); // Retorna a instância do banco de dados
  } catch (erro) {
    console.error('Erro ao conectar ao banco de dados:', erro);
    throw erro;
  }
}

// Exporta a função para ser utilizada por outros arquivos
module.exports = connectDB;
