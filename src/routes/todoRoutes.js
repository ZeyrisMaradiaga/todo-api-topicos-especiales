const express = require('express');
const { createTodo, getTodos, getTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const { todoValidation } = require('../validators/todoValidator');
const { validate } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/', todoValidation, validate, createTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.put('/:id', todoValidation, validate, updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;