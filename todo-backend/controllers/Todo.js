const Todos = require("../models/Todo");

const findAll = (req, res) => {
  Todos.find()
    .then((foundTodos) => res.send(foundTodos))
    .catch((err) => res.send(err));
};

const add = (req, res) => {
  const newTodos = new Todos({
    task: req.body.task,
    status: req.body.status,
  });
  newTodos.save();
  res.send("added successfully");
};

const findOne = (req, res) => {
  Todos.findOne({ _id: req.params.id })
    .then((foundTodo) => res.send(foundTodo))
    .catch((err) => res.send(err));
};

const deleteOne = (req, res) => {
  Todos.deleteOne({ _id: req.params.id })
    .then((deletedTodo) => res.send("delete success"))
    .catch((err) => res.send(err));
};

const updateOne = (req, res) => {
  Todos.updateOne({ _id: req.params.id }, { $set: req.body })
    .then((patchedTodo) => res.send("update success"))
    .catch((err) => res.send(err));
};

module.exports = { findAll, add, findOne, deleteOne, updateOne };
