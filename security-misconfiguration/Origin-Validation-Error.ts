/*
Type Of Vulnerability : Origin Validation Error
CWE : CWE-942
*/

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "../config";
import { userRouter } from "./user/user.route";
import "@total-typescript/ts-reset";
import { userMongoDBRouter } from "./user-raw-mongodb/user.route";
import { userMongooseRouter } from "./user-raw-mongoose/user.route";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*"); //Source and Sink
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, AUTHORIZATION"
  );
  next();
});

app.get("/ping", (_req: Request, res: Response) => {
  res.send("pong");
});

app.use(userRouter);
app.use("/raw-mongodb", userMongoDBRouter);
app.use("/mongoose", userMongooseRouter);

app.use((_, res) => {
  res.status(404).send("Not found");
});

if (!config.isTestEnvironment) {
  app.listen(config.port);
  console.info("App is listening on port:", config.port);
}

export { app };
