'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.cashbook, {
        sourceKey : 'userId',
        foreignKey : 'userId',
        onDelete: 'CASCADE'
      });
      this.hasMany(models.cashlist, {
        sourceKey : 'userId',
        foreignKey : 'userId',
        onDelete: 'CASCADE'
      });
      this.hasMany(models.board, {
        sourceKey : 'userId',
        foreignKey : 'userId',
        onDelete: 'CASCADE'
      });
      this.hasMany(models.cashactivity, {
        sourceKey : 'userId',
        foreignKey : 'userId',
        onDelete: 'CASCADE'
      });

    }
  }
  user.init({
    userId: DataTypes.INTEGER,
    userAuth: DataTypes.INTEGER,
    userNickName: DataTypes.STRING,
    userPwd: DataTypes.STRING,
    userLoginType: DataTypes.STRING,
    userCreatedAt: DataTypes.DATE,
    userUpdatedAt: DataTypes.DATE,
    userImage: DataTypes.STRING,
    userPoint: DataTypes.INTEGER,
    userType: DataTypes.INTEGER
  }, {
    timestamps:false,
    sequelize,
    modelName: 'user',
  });
  return user;
};