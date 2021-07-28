import { Response , Request } from 'express';
import { DeleteExpenseService } from '../../services/Expenses/DeleteExpense';

class DeleteExpenseController {
  static async handle(req: Request, res: Response){
    const { userId , description , value } = req.body;

    if ( !userId || !description || !value ) return res.status(404).json({message: 'Campo vazio'});

    await DeleteExpenseService.execute({ userId , description , value });

    return res.status(200).json({ description , value})
  } 
}

export { DeleteExpenseController }