"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
var express_1 = __importDefault(require("express"));
var todos_1 = require("./todos");
var app = express_1.default();
/** Middleware */
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.get("/", function (_, res) {
    res.status(200).json({ message: "api working" });
});
/** Routes */
app.use(todos_1.TodosRouter);
/** App */
var port = process.env.PORT || 5000;
app.listen(port, function () { return console.log("Server running on port : " + port); });
//# sourceMappingURL=index.js.map