import { router as expensesRoutes } from './Expenses'
import { router as revenuesRoutes } from './Revenues'
import { router as usersRoutes } from './Users'
import { router as tokenRoutes } from './token'

const router = (app: any) => {
  app.use(expensesRoutes, revenuesRoutes, usersRoutes, tokenRoutes)
}

export { router }
