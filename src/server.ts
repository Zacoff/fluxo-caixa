import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { router } from './routes'

import './database'

const app = express()

app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
  res.set('X-Powered-By', 'PHP/7.1.7')
  next()
})

router(app)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) { return res.status(400).json({ message: err.message }) }
  res.status(500).json({ status: 'error', message: 'Internal Server Error' })
})

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING on port ${process.env.PORT}`)
})
