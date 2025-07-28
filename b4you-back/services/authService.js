const jwt = require('jsonwebtoken');

const USER = {
  email: 'admin@b4you.dev',
  password: '123456'
};

const SECRET = process.env.JWT_SECRET || 'b4you-secret';

function login(email, password) {
  if (email !== USER.email || password !== USER.password) {
    const error = new Error('Credenciais inválidas');
    error.status = 401;
    throw error;
  }

  const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
  return token;
}

module.exports = { login };
