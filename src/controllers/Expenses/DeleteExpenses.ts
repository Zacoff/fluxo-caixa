import { Request , Response } from 'express';
import { DeleteExpensesService } from '../../services/Expenses/DeleteExpenses';

class DeleteExpensesController {
  static async handle(req: Request, res: Response){
    const { ids } = req.body;

    const expense = await DeleteExpensesService.execute(ids)

    return res.status(200).json(expense)
  }
}

export { DeleteExpensesController }