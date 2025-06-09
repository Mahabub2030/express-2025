"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const filePath = path_1.default.join(__dirname, "../db/todo.json");
const port = 3000;
app.get("/", (req, res) => {
    res.send("welcome to todos app!");
});
app.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log("from qures", req.query);
    console.log("from params", req.params);
    res.json(data);
});
app.post("/todos/create-todo", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("Hello World!");
});
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
exports.default = app;
/**
 * server ==> sever handling ,
 * app ==> routing handiling with meddleware ,route error handeling,
 * app folder ==> app business handling like crate red upde delete database working
 *
 */
