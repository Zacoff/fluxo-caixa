import { Request , Response } from 'express';
import { DeleteAllExpensesService } from '../../services/Expenses/DeleteAllExpenses';

class DeleteAllExpensesController {
  static async handle(req: Request, res: Response){
    const { userId } = req.body;

    const expense = await DeleteAllExpensesService.execute(userId)

    return res.status(200).json(expense)
  }
}

export { DeleteAllExpensesController }