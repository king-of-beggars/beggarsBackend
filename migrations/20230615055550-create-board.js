'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('board', {
      boardId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      boardText: {
        type: Sequelize.STRING
      },
      boardCreatedAt: {
        type: Sequelize.DATE
      },
      boardCreatedAt: {
        type: Sequelize.DATE
      },
      boardTypes: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "user",
          key: "userId"
        },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('board');
  }
};