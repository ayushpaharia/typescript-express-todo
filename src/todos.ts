import { Router } from "express";

export const TodosRouter = Router();

/** DB schema */
type Todo = {
  id: string;
  completed: boolean;
  message: string;
};
let todos: Todo[] = [];
let currentID = 125;

/** Routes */
TodosRouter.get("/", (req, res) => {
  return res.status(200).send({ todos });
});

TodosRouter.post("/", (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res
      .status(400)
      .send({ error: "Invalid request: No message property" });
  }
  const todo: Todo = {
    id: currentID++ as unknown as string,
    message,
    completed: false,
  };
  todos.push(todo);
  return res.status(200).send({ todos });
});

TodosRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({ error: "Invalid request: No id in url" });
  }
  todos = todos.filter((todo) => todo.id != id);

  return res.status(200).send({ todos });
});
