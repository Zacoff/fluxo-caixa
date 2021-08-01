import { Response, Request } from 'express'
import { CreateExpenseService } from '../../services/Expenses/CreateExpense'

class CreateExpensesController {
  static async handle (req: Request, res: Response) {
    const { description, value, createdAt } = req.body

    const { userId } = req

    const expense = await CreateExpenseService.execute({ userId, description, value, createdAt })

    return res.json(expense)
  }
}

export { CreateExpensesController }
