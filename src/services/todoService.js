// src/services/todoService.js
const prisma = require('../prisma');

exports.createTodo = async ({ title, description, authorId }) => {
  const user = await prisma.user.findUnique({ where: { id: authorId } });
  if (!user) throw new Error('Author not found');
  return prisma.todo.create({
    data: { title, description, authorId }
  });
};

exports.getAllTodosWithAuthorName = () => {
  return prisma.todo.findMany({
    include: {
      author: {
        select: { id: true, name: true }
      }
    },
    orderBy: { createdAt: 'desc' }
  }).then(todos => todos.map(t => ({
    id: t.id,
    title: t.title,
    description: t.description,
    completed: t.completed,
    authorId: t.authorId,
    authorName: t.author?.name ?? null,
    createdAt: t.createdAt,
    updatedAt: t.updatedAt
  })));
};

exports.getTodoById = (id) => prisma.todo.findUnique({ where: { id }, include: { author: { select: { id: true, name: true } } }});
exports.updateTodo = (id, data) => prisma.todo.update({ where: { id }, data });
exports.deleteTodo = (id) => prisma.todo.delete({ where: { id } });
