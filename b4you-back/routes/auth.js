const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const USER = {
  email: 'admin@b4you.dev',
  password: '123456' // Em produção, use hash
};

const SECRET = process.env.JWT_SECRET || 'b4you-secret';

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email !== USER.email || password !== USER.password) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
