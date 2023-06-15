'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hotDeal', {
      hotDealId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotDealTitle: {
        type: Sequelize.STRING
      },
      hotDealText: {
        type: Sequelize.STRING
      },
      hotDealPrice: {
        type: Sequelize.INTEGER
      },
      hotDealLimit: {
        type: Sequelize.INTEGER
      },
      hotDealImg: {
        type: Sequelize.STRING
      },
      hotDealStartDate: {
        type: Sequelize.DATE
      },
      hotDealEndDate: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hotDeal');
  }
};