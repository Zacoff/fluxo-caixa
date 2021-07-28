import {Router} from "express";
import { CreateExpensesController } from "../../controllers/Expenses/CreateExpense";
import { DeleteExpenseController } from "../../controllers/Expenses/DeleteExpense";
import { DeleteAllExpensesController } from "../../controllers/Expenses/DeleteAllExpenses";
import { ListExpensesController } from "../../controllers/Expenses/ListExpenses";

const router = Router();

router
.get('/list/expenses', ListExpensesController.handle)
.post('/create/expenses', CreateExpensesController.handle)
.delete('/delete/expense', DeleteExpenseController.handle)
.delete('/delete/allExpenses', DeleteAllExpensesController.handle)

export {router}