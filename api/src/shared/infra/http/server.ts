import "reflect-metadata";
import "dotenv/config";

import express, { Request, Response, NextFunction } from "express";
import { errors } from "celebrate";
import "express-async-errors";
import cors from "cors";

import routes from "./routes";

import "../typeorm";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.listen(3333, () => {
  console.log("🚀 Server started on port 3333!");
});
