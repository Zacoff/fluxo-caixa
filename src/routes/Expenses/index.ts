import { Router } from 'express'
import { CreateExpensesController } from '../../controllers/Expenses/CreateExpense'
import { DeleteExpenseController } from '../../controllers/Expenses/DeleteExpense'
import { DeleteAllExpensesController } from '../../controllers/Expenses/DeleteAllExpenses'
import { ListExpensesController } from '../../controllers/Expenses/ListExpenses'
import { ensureAuthenticate } from '../../middlewares/ensureAuthenticate'

const router = Router()

router
  .get('/list/expenses', ensureAuthenticate.handle, ListExpensesController.handle)
  .post('/create/expenses', ensureAuthenticate.handle, CreateExpensesController.handle)
  .delete('/delete/expense', ensureAuthenticate.handle, DeleteExpenseController.handle)
  .delete('/delete/allExpenses', ensureAuthenticate.handle, DeleteAllExpensesController.handle)

export { router }
