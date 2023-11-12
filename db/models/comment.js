"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Comment.init(
    {
      date: DataTypes.DATE,
      content: DataTypes.STRING,
      sighting_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "comments",
      underscored: true,
    }
  );
  return Comment;
};
