import "reflect-metadata";
import express , {Request, Response, NextFunction} from "express";
import "express-async-errors";

import { router } from "./routes";

import './database'

const app = express();

app.use(express.json());

router(app);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error) { return res.status(400).json({message: err.message}) }
  res.status(500).json({status: 'error' , message: "Internal Server Error"})
})

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING on port ${process.env.PORT}`)
})