const express = require("express");
const path = require('path');
const db_connection = require("./db_connection");
const connectDB = require("./db_connection");
const Users = require('./class_users');
const multer = require('multer');
const router = express.Router();

const default_collection = produtos

function generate_id(){
    const min = 1000;
    const max = 9000;
  
    
    const seed = Date.now();
    Math.seedrandom(seed.toString());
  
    
    const num = 1400+(Math.floor(Math.random() * (max - min + 1)) + min)-7;
  
    return num;
}

function insert_db(json, collection){
    try{
        const db = db_connection.connectDB()
        const colecao = db.collection(collection);
        const res_transaction = colecao.insertOne(json)
        console.log('Documento inserido com sucesso:', resultado);
    }catch (err){
        console.error(" - Erro ao inserir dado: ", res_transaction)
    }
}
function deleteById(id, collection) {
    try {
        const db =  db_connection.connectDB();
        const colecao = db.collection(collection);

        const res_transaction = colecao.deleteOne({ _id: parseInt(id, 10) });

        if (res_transaction.deletedCount === 1) {
            console.log('Documento excluído com sucesso');
        } else {
            console.log('Documento não encontrado para exclusão');
        }
    } catch (err) {
        console.error('Erro ao excluir dado:', err);
    }
}
function querry_all(collection){
    try {
        const db = db_connection.connectDB();
        const colecao = db.collection(collection)

        let result_consult = colecao.find({}).toArray();
        return result_consult;
    }catch (err){
        console.error(" - Erro ao consultar dados: ", err)
    }
}
function querryByCategory(category){
    try {
        const db = db_connection.connectDB();
        const colecao = db.collection(collection)

        let result_consult = colecao.find({categoria: category}).toArray();
        return result_consult;
    }catch (err){
        console.error(" - Erro ao consultar dados: ", err)
    }
}


// Rotas CRUD para a coleção "users"
app.get('/users', async (req, res) => {
    // Busca todos os usuarios
    res.json(querry_all(users));
  });
  
  app.post('/users/:name/email/:email/ps/:password/number/:phoneNumber', async (req, res) => {
    //Cadastra todos os usuarios
    let user_name = req.params.name;
    let user_email = req.params.email;
    let user_password = req.params.password;
    let user_phoneNUmber = req.params.user_phoneNUmber;
    let user_id = generate_id();

    const New_User = new User(user_name, user_email, password, user_phoneNUmber, user_id)
    const user_json ={
        "name": New_User.getName(),
        "email": New_User.getEmail(),
        "password": New_User.getPassword(),
        "phoneNumber": New_User.getPhoneNumber(),
        "_id": New_User.getId_code()
    }
    insert_db(user_json);
    
    res.json(user_json);
  });

  // Rotas CRUD para a coleção "produtos" com upload de imagem

  app.get('/products', async (req, res)=>{
    res.json(querry_all(products));
  })
  app.get('/product/:category', async (req, res)=>{
    res.json(querryByCategory(req.params.category))
  })
  app.post('/products/:name/price/:price/weight/:weight/description/:description/on_stock/:inStock', upload.single('imagem'),async (req, res) =>{
    let product_name = req.params.name;
    let product_price = parseFloat(req.params.price);
    let product_weight = parseFloat(req.params.weight);
    let product_description = req.params.description;
    let product_InStock = parseInt(req.params.inStock);
    let product_id = generate_id();

    const New_product = new Product(product_name, product_price, product_weight, product_description, product_InStock, product_id);
    const product_jsom = {
        "name": New_product.getProductName(),
        "price": New_product.getProductPrice(),
        "weight": New_product.getProductWeight(),
        "description": New_product.getProductDescription(),
        "instock": New_product.getProductInStock(),
        "_id": New_product.getId_code()
    }
    insert_db(product_json);
  });
  
  // Rotas para adicionar compras

  app.post('/add-purchase/id_cliente/:id_cliente/id_produto/:id_product/total_value/:total_value', async (req, res)=>{
    let id_purchase = generate_id()
    let id_cliente = req.params.id_cliente;
    let id_product = req.params.id_product;
    let purchase_total_value = req.params.total_value;
    
    const New_Purchase = new Purchase(id_purchase, id_cliente, id_product, purchase_total_value);

    const purchase_json = {
        "_id": New_Purchase.getPurchaseId(),
        "id_client": New_Purchase.getPurchaseIdUser(),
        "id_product": New_Purchase.getPurchaseIdProduct(),
        "total_value": New_Purchase.getPurchaseTotalValue()
    }
  });
  app.get('/querry-purchases', async (req, res)=>{
    res.json(querryAll(purchases));
  });

