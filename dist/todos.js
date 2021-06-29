"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosRouter = void 0;
var express_1 = require("express");
exports.TodosRouter = express_1.Router();
var todos = [];
var currentID = 125;
/** Routes */
exports.TodosRouter.get("/todos", function (req, res) {
    return res.status(200).send({ todos: todos });
});
exports.TodosRouter.post("/todos", function (req, res) {
    var message = req.body.message;
    if (!message) {
        return res
            .status(400)
            .send({ error: "Invalid request: No message property" });
    }
    var todo = {
        id: currentID++,
        message: message,
        completed: false,
    };
    todos.push(todo);
    return res.status(200).send({ todos: todos });
});
exports.TodosRouter.delete("/todos/:id", function (req, res) {
    var id = req.params.id;
    if (!id) {
        return res.status(400).send({ error: "Invalid request: No id in url" });
    }
    todos = todos.filter(function (todo) { return todo.id != id; });
    return res.status(200).send({ todos: todos });
});
//# sourceMappingURL=todos.js.map