import { router as expensesRoutes } from './Expenses'
import { router as revenuesRoutes } from './Revenues'

const router = (app: any) => {
  app.use(expensesRoutes , revenuesRoutes);
}

export {router}