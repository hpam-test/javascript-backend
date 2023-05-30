'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_merk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category_merk.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.SMALLINT,
    updated_by: DataTypes.INTEGER,
    updated_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'category_merk',
    timestamps: false
  });
  return category_merk;
};