'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class t_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  t_category.init({
    id_parent: DataTypes.INTEGER,
    level: DataTypes.SMALLINT,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    slug: DataTypes.STRING,
    href: DataTypes.STRING,
    status: DataTypes.SMALLINT,
    display_order: DataTypes.SMALLINT,
    created_on: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_on: DataTypes.DATE,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 't_category',
    timestamps: false
  });
  return t_category;
};