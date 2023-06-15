'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cashActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cashlist, {
        foreignKey: 'cashListId',
      });
      this.belongsTo(models.userId, {
        foreignKey: 'userId',
      });
    }
  }
  cashActivity.init({
    cashActivityId: DataTypes.INTEGER,
    cashListId: { 
      type:DataTypes.INTEGER,
      references: {
        model: "cashList",
        key: "cashListId"
      }
    },
    userId: {
      type:DataTypes.INTEGER,
        references: {
          model: "user",
          key: "userId"
        }
    },
    cashStopDate: DataTypes.DATE,
    cashRestartDate: DataTypes.DATE,
    cashUpdatedDate: DataTypes.DATE
  }, {
    timestamps:false,
    sequelize,
    modelName: 'cashActivity',
  });
  return cashActivity;
};