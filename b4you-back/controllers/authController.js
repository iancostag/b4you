const authService = require('../services/authService');

const login = (req, res) => {
  try {
    const { email, password } = req.body;

    const token = authService.login(email, password);
    res.json({ token });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
};

module.exports = { login };
