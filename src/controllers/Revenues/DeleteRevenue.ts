import { Response, Request } from 'express'
import { DeleteRevenueService } from '../../services/Revenues/DeleteRevenue'

class DeleteRevenueController {
  static async handle (req: Request, res: Response) {
    const { description, value } = req.body

    const { userId } = req

    await DeleteRevenueService.execute({ userId, description, value })

    return res.status(200).json({ description: description, value: value })
  }
}

export { DeleteRevenueController }
