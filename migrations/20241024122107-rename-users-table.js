'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Users', 'firstName', 'username');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Users', 'username', 'firstName');
  }
};


// async function alterTable() {
//   try {
//     await sequelize.sync({alter: true }); // force: true drops the table if it exists
//     console.log('User table has been altered with the new column names.');
//   } catch (error) {
//     console.error('Error altering the User table:', error);
//   }
// }
// alterTable();