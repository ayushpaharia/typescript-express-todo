console.clear();

import express from "express";
import { TodosRouter } from "./todos";

const app = express();

/** Middleware */
app.use(express.static("public"));
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).json({ message: "api working" });
});

/** Routes */
app.use("/todos", TodosRouter);

/** App */
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port : ${port}`));
