import { Request, Response } from "express";
import { ListExpensesService } from "../../services/Expenses/ListExpenses";


class ListExpensesController {
    static async handle(req: Request, res: Response){
      const { userId } = req.body;

      if (!userId) throw new Error(`Invalid Id`);

      const revenues = await ListExpensesService.execute(userId);

      return res.json(revenues);

    }
}

export { ListExpensesController }