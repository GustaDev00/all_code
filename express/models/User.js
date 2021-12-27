const db = require('./db');

const User = sequelize.define('users', {
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

// User.sync({force: true});
module.exports = User;