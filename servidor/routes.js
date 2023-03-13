//Importando o express.router()
const express = require('express')
const route = express.Router()

//importa Controle das rotas
const homeController = require("./src/controllers/homeController")

//Rotas
route.get('/', homeController.listaAtual)

//Exportando todas as rotas
module.exports = route