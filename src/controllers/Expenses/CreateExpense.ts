import { Response , Request } from 'express'
import { CreateExpense } from '../../services/Expenses/CreateExpense'


class CreateExpensesController {
  static async handle(req: Request, res: Response) {
    const { description , value , createdAt } = req.body

    const expense = await CreateExpense.execute({description, value , createdAt});

    return res.json(expense);
  }
}

export { CreateExpensesController }