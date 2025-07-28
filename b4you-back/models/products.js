'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'Products' 
  });
  return Product;
};
