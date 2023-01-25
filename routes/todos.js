import { Router } from "express";

import * as controllers from "../controllers/todos.js";

const router = Router();

router.get("/todos", controllers.getTodoList);
router.post("/todos", controllers.createTodo);
router.delete("/todos/:todo_id", controllers.deleteTodo);
router.put("/todos/:todo_id", controllers.updateTodo);

export default router;
