import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(routes);

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(3333);

/* 
yarn tsc src/index.ts 
node src/index.js

yarn tsc --init

yarn tsc

- Trocar no tsconfig.json a saida do arquivo transpilado
"outDir": "./dist"

yarn add ts-node-dev -D

yarn dev:server
*/
