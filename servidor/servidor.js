const express = require('express')
const app = express()

//importando rotas
const routes = require('./routes')

app.use(routes)

app.listen(3001, ()=>{
    console.log("Servidor rodando na porta http://localhost:3001")
    console.log("Servidor online")
})
