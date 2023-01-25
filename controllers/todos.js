import Todo from "../models/Todo.js";

export const getTodoList = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { todo_id } = req.params;
    const deleted = await Todo.findByIdAndDelete(todo_id);

    if (deleted) return res.status(200).send("Todo deleted");
    throw new Error("Todo not Found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { todo_id } = req.params;
    const update = await Todo.findByIdAndUpdate(todo_id, req.body);
    res.status(200).json(update);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
