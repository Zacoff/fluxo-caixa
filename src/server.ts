import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import './database'

const app = express();

app.use(express.json());

router(app);

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING on port ${process.env.PORT}`)
})