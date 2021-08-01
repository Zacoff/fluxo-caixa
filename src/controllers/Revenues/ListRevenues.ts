import { Request, Response } from 'express'
import { ListRevenuesService } from '../../services/Revenues/ListRevenues'

class ListRevenuesController {
  static async handle (req: Request, res: Response) {
    const { userId } = req

    const revenues = await ListRevenuesService.execute(userId)

    return res.json(revenues)
  }
}

export { ListRevenuesController }
