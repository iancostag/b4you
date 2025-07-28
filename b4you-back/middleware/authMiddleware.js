const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'b4you-secret';

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token ausente' });

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Você não tem acesso a essa página' });
    req.user = user;
    next();
  });
}

module.exports = authMiddleware;
