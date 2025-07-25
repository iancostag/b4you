'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        nome: 'Camiseta B4You',
        preco: 59,
        descricao: 'Camiseta confortável com estampa da B4You',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Caneca B4You',
        preco: 29,
        descricao: 'Caneca branca personalizada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Mochila Tech',
        preco: 199,
        descricao: 'Mochila com divisórias para notebook',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Caderno Inteligente',
        preco: 45,
        descricao: 'Caderno com folhas reposicionáveis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Fone Bluetooth',
        preco: 149,
        descricao: 'Fone sem fio com cancelamento de ruído',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
