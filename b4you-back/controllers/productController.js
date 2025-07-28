const productService = require('../services/productService');
const productSchema = require('../validations/productValidation');

const getAll = async (req, res) => {
  try {
    const products = await productService.getAll(); 
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

const getOne = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = await productService.getById(id);
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
};


const create = async (req, res) => {
  try {
    const data = await productSchema.validate(req.body, { abortEarly: false });
    const created = await productService.create(data); 
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ error: 'Erro de validação', details: err.errors });
  }
};

const update = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = await productSchema.validate(req.body, { abortEarly: false });
    const updated = await productService.update(id, data); 

    if (!updated) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Erro de validação', details: err.errors });
  }
};

const remove = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const success = await productService.remove(id); 

    if (!success) return res.status(404).json({ error: 'Produto não encontrado' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
};

module.exports = { getAll,getOne, create, update, remove };
