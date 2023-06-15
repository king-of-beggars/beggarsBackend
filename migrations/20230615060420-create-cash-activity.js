'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cashActivity', {
      cashActivityId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cashListId: {
        type: Sequelize.INTEGER,
        references: {
          model: "cashList",
          key: "cashListId"
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "user",
          key: "userId"
        },
      },
      cashStopDate: {
        type: Sequelize.DATE
      },
      cashRestartDate: {
        type: Sequelize.DATE
      },
      cashUpdatedDate: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cashActivity');
  }
};