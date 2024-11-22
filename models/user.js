// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const User = sequelize.define('User', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   ages: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   }
// }, {
//   paranoid: true, 
//   timestamps: false, 
// });

// // Console log for confirmation
// console.log(User === sequelize.models.User);

// async function alterTable() {
//   try {
//     await sequelize.sync({alter: true }); // force: true drops the table if it exists
//     console.log('User table has been altered with the new column names.');
//   } catch (error) {
//     console.error('Error altering the User table:', error);
//   }
// }
// alterTable();

// module.exports = User;
