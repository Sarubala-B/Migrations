
const { Sequelize } = require('sequelize');

// Initialize Sequelize connection
const sequelize = new Sequelize('db1', 'root', 'Sarubala', {
    host: 'localhost',
    dialect: 'mariadb' 
});

module.exports = sequelize;