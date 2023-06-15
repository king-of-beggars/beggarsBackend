'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cashbook', {
      cashbookId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cashbookCategory: {
        type: Sequelize.STRING
      },
      cashbookName: {
        type: Sequelize.STRING
      },
      cashbookNowValue: {
        type: Sequelize.INTEGER
      },
      cashbookGoalValue: {
        type: Sequelize.INTEGER
      },
      cashbookDetail: {
        type: Sequelize.JSON
      },
      cashbookCreatedAt: {
        type: Sequelize.DATE
      },
      cashbookUpdatedAt: {
        type: Sequelize.DATE
      },
      userId: {
        references: {
          model: "user",
          key: "userId"
        },
        type: Sequelize.INTEGER
      },
      cashListId: {
        references: {
          model: "cashList",
          key: "cashListId"
        },
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cashbook');
  }
};