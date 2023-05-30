'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_type.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.SMALLINT,
    updated_by: DataTypes.INTEGER,
    updated_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'product_type',
    timestamps: false
  });
  return product_type;
};