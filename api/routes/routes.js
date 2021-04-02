const express = require("express");
const router = express.Router();
const todoController = require("../services/controllers/ToDoController");

router.post("/add_todo", todoController.addToDo);
router.get("/get_todo/:todo_no", todoController.getToDo);
router.post("/remove_todo", todoController.removeToDo);
router.post("/update_todo", todoController.todoUpdate);

router.get("/get_todos", todoController.getToDos);

module.exports = router;
