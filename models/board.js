'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.board, {
        foreignKey: 'userId',
      });
      this.hasMany(models.comment, {
        sourceKey : 'boardId',
        foreignKey : 'boardId',
        onDelete: 'CASCADE'
      });
    }
  }
  board.init({
    boardId: DataTypes.INTEGER,
    boardText: DataTypes.STRING,
    boardCreatedAt: DataTypes.DATE,
    boardCreatedAt: DataTypes.DATE,
    boardTypes: DataTypes.INTEGER,
    userId: {
      type:DataTypes.INTEGER,
      references: {
        model: "user",
        key: "userId"
      },
    }
    }, {
    timestamps:false,
    sequelize,
    modelName: 'board',
  });
  return board;
};