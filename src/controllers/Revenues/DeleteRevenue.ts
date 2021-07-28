import { Response , Request } from 'express';
import { DeleteRevenueService } from '../../services/Revenues/DeleteRevenue';

class DeleteRevenueController {
  static async handle(req: Request, res: Response){
    const { userId, description , value } = req.body;

    if (!description || !value) return res.status(404).json({message: 'Description or Value empty'});

    await DeleteRevenueService.execute({ userId , description , value });

    return res.status(200).json({description: description , value: value});
  } 
}

export { DeleteRevenueController }