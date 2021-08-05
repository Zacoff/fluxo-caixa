import { Response, Request } from 'express'
import { CreateRevenueService } from '../../services/Revenues/CreateRevenue'

class CreateRevenuesController {
  static async handle (req: Request, res: Response) {
    const { description, value, createdAt } = req.body

    console.log(description)

    const { userId } = req

    const revenue = await CreateRevenueService.execute({ userId, description, value, createdAt })

    return res.status(201).json(revenue)
  }
}

export { CreateRevenuesController }
