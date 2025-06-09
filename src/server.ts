import app from "./app";

let server;
const port = 5000;

const bootsrap = async () => {
    server = app.listen(port, () => {
      console.log(`Express app listning on port ${port}`);
    });
}

bootsrap()