const express = require("express");
const routes = express.Router();
const TodoController = require("./controllers/TodoController");

routes.post("/todos", TodoController.addTodo);
routes.get("/todos", TodoController.showAllTodos);
routes.get("/todos/:id", TodoController.showOneTodo);
routes.put("/todos/:id", TodoController.updateTodo);
routes.delete("/todos/:id", TodoController.deleteTodo);

module.exports = routes;