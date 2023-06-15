'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotDeal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotDeal.init({
    hotDealId: DataTypes.INTEGER,
    hotDealTitle: DataTypes.STRING,
    hotDealText: DataTypes.STRING,
    hotDealPrice: DataTypes.INTEGER,
    hotDealLimit: DataTypes.INTEGER,
    hotDealImg: DataTypes.STRING,
    hotDealStartDate: DataTypes.DATE,
    hotDealEndDate: DataTypes.DATE
  }, {
    timestamps:false,
    sequelize,
    modelName: 'hotDeal',
  });
  return hotDeal;
};