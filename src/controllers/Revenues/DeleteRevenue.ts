import { Response , Request } from 'express';
import { DeleteRevenue } from '../../services/Revenues/DeleteRevenue';

class DeleteRevenueController {
  static async handle(req: Request, res: Response){
    const { description , value } = req.body;

    if (!description || !value) return res.status(404).json({message: 'Description or Value empty'});

    await DeleteRevenue.execute(req.body);

    return res.status(200).json({description: description , value: value});
  } 
}

export { DeleteRevenueController }