exports.listaAtual = (req, res) =>{
    const agenda = {"Agenda":[
        {"tarefa":"Comida"},
        {"tarefa":"Lavar Lousa"}
    ]}
    res.send(agenda)
    return
}