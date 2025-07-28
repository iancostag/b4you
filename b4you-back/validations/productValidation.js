const yup = require('yup');

const productSchema = yup.object().shape({
  nome: yup.string().required().min(3),
  preco: yup.number().required().positive(),
  descricao: yup.string().optional()
});

module.exports = productSchema;
