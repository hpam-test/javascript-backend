'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    name: DataTypes.STRING,
    id_category: DataTypes.INTEGER,
    id_category_brand: DataTypes.INTEGER,
    warna: DataTypes.STRING,
    variant: DataTypes.STRING,
    tipe_produk: DataTypes.INTEGER,
    description: DataTypes.STRING,
    description2: DataTypes.TEXT,
    slug: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.SMALLINT,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    weight: DataTypes.REAL,
    created_by: DataTypes.INTEGER,
    created_on: DataTypes.DATE,
    view: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
    timestamps: false
  });
  return product;
};
