import { Request, Response } from "express";
import { ListRevenuesService } from "../../services/Revenues/ListRevenues";


class ListRevenuesController {
    static async handle(req: Request, res: Response){
        
        const revenues = await ListRevenuesService.execute();

        return res.json(revenues);

    }
}

export {ListRevenuesController }