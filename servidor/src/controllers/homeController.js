exports.listaAtual = (req, res) =>{
    res.send({"Agenda":[
        {"tarefa":"Comida"},
        {"tarefa":"Lavar Lousa"}
    ]})
    return
}