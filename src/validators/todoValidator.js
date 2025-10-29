const { body } = require('express-validator');

exports.todoValidation = [
  body('title').isString().isLength({ min: 1 }),
  body('description').optional().isString(),
  body('authorId').isInt().withMessage('authorId debe ser un entero')
];