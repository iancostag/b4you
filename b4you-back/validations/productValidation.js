const yup = require('yup');

const productSchema = yup.object().shape({
  name: yup.string().required().min(3),
  price: yup.number().required().positive(),
  description: yup.string().optional()
});

module.exports = productSchema;
