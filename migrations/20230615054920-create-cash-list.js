'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cashList', {
      cashListId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cashCategory: {
        type: Sequelize.STRING
      },
      cashName: {
        type: Sequelize.STRING
      },
      cashListCreatedAt: {
        type: Sequelize.DATE
      },
      cashListGoalValue: {
        type: Sequelize.INTEGER
      },
      userId: {
        references: {
          model: "user",
          key: "userId"
        },
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cashList');
  }
};