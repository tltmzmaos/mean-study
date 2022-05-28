const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'jm_secret_key_super_long');
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Auth failed in header'
    });
  }


};
