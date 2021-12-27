//Aula de rotas no Node JS

//Express - Framework para criar um servidor de forma mais facil
//Só essas duas linhas já faz o servidor funcionar direito
//Caso não tenha o o express a forma de criar fica mais complexa
//Como pode ver o no arquivo dentro da pasta protocolo_http
const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Pagina de Blog, para saber mais sobre nada, porque é um app node");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("Seja bem vindo " + req.params.nome + ". \nVocê é um excelente " +  req.params.cargo);
});


app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});
// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });