import { Request, Response } from "express";
import { ListExpensesService } from "../../services/Expenses/ListExpenses";


class ListExpensesController {
    static async handle(req: Request, res: Response){
        
        const revenues = await ListExpensesService.execute();

        return res.json(revenues);

    }
}

export { ListExpensesController }