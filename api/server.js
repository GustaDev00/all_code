const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());
// Verbos HTTP
//GET: Receber dados de um Resource
app.get("/clients", function(req, res){
    res.json(data);
});
app.get("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();
    res.json(client);
});

//POST: Enviar dados ou informações para serem processador por um Resource.
app.post("/clients", function(req, res){
    const {name, email} = req.body;

    //salvar

    res.json({name, email});
});

//PUT: Atualizar dados de um Resource
app.put("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();
    const { name } = req.body;
    client.name = name

    res.json(client);
});
//DELETE: Deletar um Resource
app.delete("/clients/:id", function(req, res){
    const { id } = req.params;
    const clientFiltered = data.filter(client => client.id != id);

    res.json(clientFiltered);
});

// http://localhost:3000/clients

app.listen(3000, function(){
    console.log("Server is running");
});

