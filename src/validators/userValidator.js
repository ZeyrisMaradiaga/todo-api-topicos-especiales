const { body } = require('express-validator');

exports.userValidation = [
  body('name').isString().isLength({ min: 2 }),
  body('email').isEmail()
];