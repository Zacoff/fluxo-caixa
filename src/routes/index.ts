import { router as expensesRoutes } from './Expenses';
import { router as revenuesRoutes } from './Revenues';
import { router as usersRoutes } from './Users';

const router = (app: any) => {
  app.use(expensesRoutes , revenuesRoutes, usersRoutes);
}

export {router}