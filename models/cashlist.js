'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cashList extends Model {
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
      this.hasMany(models.cashactivity, {
        sourceKey : 'cashListId',
        foreignKey : 'cashListId',
        onDelete: 'CASCADE'
      });

    }
  }
  cashList.init({
    cashListId: DataTypes.INTEGER,
    cashCategory: DataTypes.STRING,
    cashName: DataTypes.STRING,
    cashListCreatedAt: DataTypes.DATE,
    cashListGoalValue: DataTypes.INTEGER,
    userId: {
      type:DataTypes.INTEGER,
      references: {
        model: "user",
        key: "userId"
      }
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'cashList',
  });
  return cashList;
};