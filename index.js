const { DataTypes } = require('sequelize');
const sequelize = require('./config/database.js')
const User = require('./models/user.js');

// //create a table
// async function createTable() {    
//     try {
//         await sequelize.sync({force:true});
//           console.log('User table created successfully');
//     } catch (error) {
//         console.log ('Error on creating table:',error);
//     }
// };
// createTable();

// //rename a column
// async function renameColumn() {
//   try {
//       await sequelize.query('ALTER TABLE Users RENAME COLUMN firstName TO name;');
//       console.log('Column renamed successfully.');
//   } catch (error) {
//       console.error('Error renaming column:', error);
//   }
// }

// renameColumn();

// // Adding a new column
// async function addColumn() {
//   try {
//       // Use appropriate SQL syntax based on your database
//       await sequelize.query('ALTER TABLE Users ADD COLUMN birthdate INT;'); // For MySQL or PostgreSQL
//       console.log('Column added successfully.');
//   } catch (error) {
//       console.error('Error adding column:', error);
//   }
// }

// addColumn();

// //drop a column
// async function dropColumn() {
//     try {
//       await sequelize.query('ALTER TABLE Users DROP COLUMN birthdate;');
//       console.log('Column dropped successfully.');
//     } catch (error) {
//       console.error('Error dropping column:', error);
//     }
//   }
// dropColumn();

// // change datatype
// async function changeColumnDatatype() {
//   try {
//       await sequelize.query('ALTER TABLE Users ALTER COLUMN birthdate TYPE INTEGER;'); 
//       console.log('Column datatype changed successfully.');
//   } catch (error) {
//       console.error('Error changing column datatype:', error);
//   }
// }

// //Insert data into a table
// async function insertUserData() {
//   try {
//     const newUser1 = await User.create({
//       name: 'ABC',
//       email: 'xyzabcde@gmail.com',
//       password: 'xxxxyyyyzzzz',
//       age: 22  // Change 'age' to 'agess'
//     });
//     const newUser2 = await User.create({
//       name: 'DEF',
//       email: 'def@gmail.com',
//       password: 'ddddeeeeffff',
//       age: 25  // Change 'age' to 'agess'
//     });
//     const newUser3 = await User.create({
//       name: 'GHI',
//       email: 'ghi@gmail.com',
//       password: 'ggghhhiii',
//       age: 28  // Change 'age' to 'agess'
//     });
//     const newUser4 = await User.create({
//       name: 'JKL',
//       email: 'jkl@gmail.com',
//       password: 'jjjkkklll',
//       age: 23  // Change 'age' to 'agess'
//     });
//     const newUser5 = await User.create({
//       name: 'XYZ',
//       email: 'xyz@gmail.com',
//       password: 'xxxxyyyyzzzz',
//       age: 24  // Change 'age' to 'agess'
//     });

//     console.log('User data inserted successfully.');
//   } catch (error) {
//     console.error('Error inserting data:', error);
//   }
// }

// insertUserData();



// //update data in column
// async function updateUserData() {
//     try {
//       const userId = 2;
//       const [updated] = await User.update(
//         {
//           firstName: 'PreethiSenthilkumar',   
//         },
//         {
//           where: { id: userId }  
//         }
//       );
//       if (updated) {
//         console.log(`User with ID ${userId} updated successfully.`);
//       } else {
//         console.log(`User with ID ${userId} not found.`);
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   }
// updateUserData();


// //Delete data in column
// async function deleteUserData() {
//     try {
//       const userId = 2; 
//       const deleted = await User.destroy({
//         where: { id: userId }  
//       });
//       if (deleted) {
//         console.log(`User with ID ${userId} deleted successfully.`);
//       } else {
//         console.log(`User with ID ${userId} not found.`);
//       }
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   }
// deleteUserData();


// // Drop the 'Users' table
// async function dropTable() {
//     await sequelize.drop('Users');
//     console.log('Users table dropped successfully');
//   }
//   dropTable().catch(err => {
//     console.error('Error dropping table:', err);
//   });

// // fetch  all users 
// async function fetchAllUsers() {
//     try {
//       const users = await User.findAll(); 
//       console.log('All Users:', users);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   }
// fetchAllUsers();

// // fetch single data
// async function fetchSingleUser() {
//     try {
//       const user = await User.findOne({
//         where: {
//           firstName: 'ramyaa'  
//         }
//       });
//       if (user) {
//         console.log('User Found:', user.toJSON());
//       } else {
//         console.log('User not found');
//       }
//     } catch (error) {
//       console.error('Error fetching user:', error);
//     }
// }  
// fetchSingleUser();

// //fetch data using Primary key
// async function fetchUserById() {
//     try {
//       const userId = 1;  
//       const user = await User.findByPk(userId); 
  
//       if (user) {
//         console.log('User Found:', user.toJSON());
//       } else {
//         console.log(`User with ID ${userId} not found`);
//       }
//     } catch (error) {
//       console.error('Error fetching user:', error);
//     }
//   }
  
//   fetchUserById();

// //soft deletion
// async function deleteUserData() {
//     try {
//       const userId = 2; 
//       const deleted = await User.destroy({
//         where: { id: userId }  // This will soft delete the user
//       });
//       if (deleted) {
//         console.log(`User with ID ${userId} deleted successfully (soft delete).`);
//       } else {
//         console.log(`User with ID ${userId} not found.`);
//       }
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
// }
// deleteUserData();

// // restore soft deleted data
// async function restoreUserData() {
//     try {
//       const userId = 2;
//       const restored = await User.restore({
//         where: { id: userId }  // Restore the soft-deleted user
//       });
//       if (restored) {
//         console.log(`User with ID ${userId} restored successfully.`);
//       } else {
//         console.log(`User with ID ${userId} not found or not soft-deleted.`);
//       }
//     } catch (error) {
//       console.error('Error restoring user:', error);
//     }
// }
// restoreUserData();


