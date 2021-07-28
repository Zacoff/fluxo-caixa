import { Response , Request } from 'express'
import { CreateRevenueService } from '../../services/Revenues/CreateRevenue'


class CreateRevenuesController {
  static async handle(req: Request, res: Response) {
    const {userId , description , value , createdAt } = req.body

    const revenue = await CreateRevenueService.execute({userId , description, value , createdAt});

    return res.json(revenue);
  }
}

export { CreateRevenuesController }