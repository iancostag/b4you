'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
    }
  }

  Product.init(
    {
      nome: DataTypes.STRING,
      preco: DataTypes.DECIMAL(10, 2),
      descricao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
    }
  );

  return Product;
};
