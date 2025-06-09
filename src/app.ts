import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();
app.use(express.json());
const filePath = path.join(__dirname, "../db/todo.json");

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to todos app!");
});

app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log("from qures", req.query);
  console.log("from params", req.params);
  res.json(data);
});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("Hello World!");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

export default app;

/**
 * server ==> sever handling ,
 * app ==> routing handiling with meddleware ,route error handeling,
 * app folder ==> app business handling like crate red upde delete database working
 *
 */
