'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userAuth: {
        type: Sequelize.INTEGER
      },
      userNickName: {
        type: Sequelize.STRING
      },
      userPwd: {
        type: Sequelize.STRING
      },
      userLoginType: {
        type: Sequelize.STRING
      },
      userCreatedAt: {
        type: Sequelize.DATE
      },
      userUpdatedAt: {
        type: Sequelize.DATE
      },
      userImage: {
        type: Sequelize.STRING
      },
      userPoint: {
        type: Sequelize.INTEGER
      },
      userType: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};