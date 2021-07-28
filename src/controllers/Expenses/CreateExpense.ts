import { Response , Request } from 'express'
import { CreateExpenseService } from '../../services/Expenses/CreateExpense'


class CreateExpensesController {
  static async handle(req: Request, res: Response) {
    const {userId , description , value , createdAt } = req.body

    const expense = await CreateExpenseService.execute({userId ,description, value , createdAt});

    return res.json(expense);
  }
}

export { CreateExpensesController }