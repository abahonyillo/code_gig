const Sequelize = require('sequelize');
module.exports = new Sequelize('codegig', 'postgres', 'Adakole090,', {
    host: 'localhost',
    dialect: 'postgres',
    port: 3000,
    // operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});