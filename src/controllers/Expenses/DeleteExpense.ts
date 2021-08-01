import { Response, Request } from 'express'
import { DeleteExpenseService } from '../../services/Expenses/DeleteExpense'

class DeleteExpenseController {
  static async handle (req: Request, res: Response) {
    const { description, value } = req.body

    const { userId } = req

    await DeleteExpenseService.execute({ userId, description, value })

    return res.status(200).json({ description, value })
  }
}

export { DeleteExpenseController }
