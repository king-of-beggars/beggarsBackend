'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comment', {
      commentId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commentText: {
        type: Sequelize.STRING
      },
      commentCreatedAt: {
        type: Sequelize.DATE
      },
      boardId: {
        type: Sequelize.INTEGER,
        references: {
          model: "board",
          key: "boardId"
        },
      },
      userId: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comment');
  }
};