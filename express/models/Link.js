const db = require('./db');

const Link = sequelize.define('links', {
    url: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    }
});

// Link.sync({force: true});
module.exports = Link;