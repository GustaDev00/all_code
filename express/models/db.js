const Sequelize = require("sequelize");

//Conexão com o banco de dados Mysql
const sequelize = new Sequelize('apppost', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}