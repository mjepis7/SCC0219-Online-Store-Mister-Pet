// módulo db_connection.js

const { MongoClient } = require('mongodb');

// URL de conexão com o banco de dados MongoDB
const mongoURI = 'mongodb://127.0.0.1:27017/mister_pet_db';

// Função para conectar ao banco de dados
async function connectDB() {
  try {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Conectado ao banco de dados');
    return client.db(); // Retorna a instância do banco de dados
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err;
  }
}

module.exports = connectDB;
