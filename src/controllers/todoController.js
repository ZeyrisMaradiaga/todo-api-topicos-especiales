const todoService = require('../services/todoService');

exports.createTodo = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTodos = async (req, res) => {
  const todos = await todoService.getAllTodosWithAuthorName();
  res.json(todos);
};

exports.getTodo = async (req, res) => {
  const todo = await todoService.getTodoById(+req.params.id);
  if (!todo) return res.status(404).json({ error: 'Not found' });
  res.json(todo);
};

exports.updateTodo = async (req, res) => {
  const updated = await todoService.updateTodo(+req.params.id, req.body);
  res.json(updated);
};

exports.deleteTodo = async (req, res) => {
  await todoService.deleteTodo(+req.params.id);
  res.status(204).send();
};