const mongoose = require("mongoose");

const todoSchema = {
  task: String,
  status: Boolean,
};
const Todos = mongoose.model("todos", todoSchema);

module.exports = Todos;
