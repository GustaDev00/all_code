//Conexão com o banco de dados e alguns exemplos de inserindo dados e criando tabela

// start connect with database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('sistemacadastro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
//Validação se deu certo ou não
sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!");
}).catch(function(erro){
    console.log("Falha: "+ erro);
});

//end of connection


// Postagem
const Postagens = sequelize.define('postagens', {
    title: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// Usuarios
const Usuarios = sequelize.define('users', {
    name: {
        type: Sequelize.STRING
    },
    nickname: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

//Link
const Links = sequelize.define('links', {
    url: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    }
});

//Comando que cria as tabelas no banco de dados

// Postagens.sync({force: true})
// Usuarios.sync({force: true});
// Links.sync({force: true});


//Comando que Insere dados na tabela

// Postagens.create({
//     title: "Tanto Faz",
//     conteudo: 'Senta pa noixxx, vrau. Node desgraçadoo'
// });

// Usuarios.create({
//     name: "Gustavo",
//     nickname: "Baby",
//     idade: 20,
//     email: "gustavo.4dev@gmail.com"
// });

// Links.create({
//     url: "bubowl.com.br",
//     type: "Domínio"
// });


