import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Todo = new Schema({
  title: { type: String, require: false },
  description: { type: String, require: false },
});

export default mongoose.model("todos", Todo);
