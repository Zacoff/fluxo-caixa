import {Router} from "express";
import { CreateExpensesController } from "../../controllers/Expenses/CreateExpense";
import { DeleteExpenseController } from "../../controllers/Expenses/DeleteExpense";
import { DeleteExpensesController } from "../../controllers/Expenses/DeleteExpenses";
import { ListExpensesController } from "../../controllers/Expenses/ListExpenses";

const router = Router();

router
.get('/list/expenses', ListExpensesController.handle)
.post('/create/expenses', CreateExpensesController.handle)
.delete('/delete/expense', DeleteExpenseController.handle)
.delete('/delete/expenses', DeleteExpensesController.handle)

export {router}