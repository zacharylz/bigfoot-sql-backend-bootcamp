"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SightingCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.sightings);
      this.belongsTo(models.categories);
    }
  }

  SightingCategories.init(
    {
      sighting_id: {
        references: {
          model: "sightings",
          key: "id",
        },
        type: DataTypes.INTEGER,
      },
      category_id: {
        references: {
          model: "categories",
          key: "id",
        },
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "sightingCategories",
      underscored: true,
    }
  );
  return SightingCategories;
};
