import { Request, Response } from 'express'
import { DeleteAllExpensesService } from '../../services/Expenses/DeleteAllExpenses'

class DeleteAllExpensesController {
  static async handle (req: Request, res: Response) {
    const { userId } = req

    await DeleteAllExpensesService.execute(userId)

    return res.status(200).json({ message: 'All Expenses Delete' })
  }
}

export { DeleteAllExpensesController }
