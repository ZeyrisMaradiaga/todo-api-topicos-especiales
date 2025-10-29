const express = require('express');
const { createUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');
const { userValidation } = require('../validators/userValidator');
const { validate } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/', userValidation, validate, createUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', userValidation, validate, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;