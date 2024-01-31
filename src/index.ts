import express, { Request, Response, Application } from "express";
import morgan from "morgan";
import env from "./util/env";
import connectDb from "./config/mongo.config";
import router from "./route";

const { PORT } = env;

const app: Application = express();
connectDb();

app.use(morgan("tiny"));

app.use(router);

app.get("/ping", (_: Request, res: Response) => {
  res.send("PONG");
});

app.listen(PORT, () => console.log(`Server is Running at http://localhost:${PORT}`));
