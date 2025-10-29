// src/services/userService.js
const prisma = require('../prisma');

exports.createUser = async ({ name, email }) => {
  return prisma.user.create({ data: { name, email } });
};

exports.getAllUsers = () => prisma.user.findMany();
exports.getUserById = (id) => prisma.user.findUnique({ where: { id } });
exports.updateUser = (id, data) => prisma.user.update({ where: { id }, data });
exports.deleteUser = (id) => prisma.user.delete({ where: { id } });
