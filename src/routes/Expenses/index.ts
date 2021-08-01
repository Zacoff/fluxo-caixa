import { Router } from 'express'
import { CreateExpensesController } from '../../controllers/Expenses/CreateExpense'
import { DeleteExpenseController } from '../../controllers/Expenses/DeleteExpense'
import { DeleteAllExpensesController } from '../../controllers/Expenses/DeleteAllExpenses'
import { ListExpensesController } from '../../controllers/Expenses/ListExpenses'
import { ensureAuthenticate } from '../../middlewares/ensureAuthenticate'
import { ensureBlocklist } from '../../middlewares/ensureTokenLogout'

const router = Router()

router
  .get('/list/expenses', [ensureAuthenticate.handle, ensureBlocklist.handle], ListExpensesController.handle)
  .post('/create/expenses', [ensureAuthenticate.handle, ensureBlocklist.handle], CreateExpensesController.handle)
  .delete('/delete/expense', [ensureAuthenticate.handle, ensureBlocklist.handle], DeleteExpenseController.handle)
  .delete('/delete/allExpenses', [ensureAuthenticate.handle, ensureBlocklist.handle], DeleteAllExpensesController.handle)

export { router }
