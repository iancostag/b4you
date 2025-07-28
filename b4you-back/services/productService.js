const { Product } = require('../models');

async function getAll() {
  return await Product.findAll();
}

async function getById(id){
  return await Product.findByPk(id);
}

async function create(data) {
  return await Product.create(data);
}

async function update(id, data) {
  const product = await Product.findByPk(id);
  if (!product) return null;
  await product.update(data);
  return product;
}

async function remove(id) {
  const deleted = await Product.destroy({ where: { id } });
  return deleted > 0;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
