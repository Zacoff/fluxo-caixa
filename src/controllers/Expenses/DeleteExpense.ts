import { Response , Request } from 'express';
import { DeleteExpense } from '../../services/Expenses/DeleteExpense';

class DeleteExpenseController {
  static async handle(req: Request, res: Response){
    const { id , description , value } = req.body;

    if ( id || !description || !value ) return res.status(404).json({message: 'Campo vazio'});

    await DeleteExpense.execute(req.body);

    return res.status(200).json({id , description , value})
  } 
}

export { DeleteExpenseController }