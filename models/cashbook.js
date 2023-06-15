'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cashbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'userId',
      });
    }
  }
  cashbook.init({
    cashbookId: DataTypes.INTEGER,
    cashbookCategory: DataTypes.STRING,
    cashbookName: DataTypes.STRING,
    cashbookNowValue: DataTypes.INTEGER,
    cashbookGoalValue: DataTypes.INTEGER,
    cashbookDetail: DataTypes.JSON,
    cashbookCreatedAt: DataTypes.DATE,
    cashbookUpdatedAt: DataTypes.DATE,
    userId: {
       type:DataTypes.INTEGER,
       references: {
        model: "user",
        key: "userId"
      }
    },
    cashListId: {
      type:DataTypes.INTEGER,
      references: {
        model: "cashList",
        key: "cashListId"
      }
    }
    }, {
    timestamps:false,
    sequelize,
    modelName: 'cashbook',
  });
  return cashbook;
};