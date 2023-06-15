'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.board, {
        foreignKey: 'boardId',
      });
    }
  }
  comment.init({
    commentId: DataTypes.INTEGER,
    commentText: DataTypes.STRING,
    commentCreatedAt: DataTypes.DATE,
    boardId: {
      type:DataTypes.INTEGER,
      references: {
        model: "board",
        key: "boardId"
      }
    },
    userId: DataTypes.INTEGER
  }, {
    timestamps:false,
    sequelize,
    modelName: 'comment',
  });
  return comment;
};