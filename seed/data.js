import database from "../database/connection.js";
import Todo from "../models/Todo.js";

const insertData = async () => {
  await database.dropDatabase();

  const todo1 = new Todo({
    title: "first Todo",
    description: "This is a test for first todo in my todo list",
  });

  await todo1.save();

  const todo2 = new Todo({
    title: "second Todo",
    description: "This is a test for the second todo in my todo list",
  });

  await todo2.save();

  const todo3 = new Todo({
    title: "third Todo",
    description: "This is a test for the third todo in my todo list",
  });

  await todo3.save();

  console.log("Three todos have been created!");

  database.close();
};

insertData();
