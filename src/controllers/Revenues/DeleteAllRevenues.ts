import { Request, Response } from 'express'
import { DeleteAllRevenuesService } from '../../services/Revenues/DeleteAllRevenues'

class DeleteAllRevenuesController {
  static async handle (req: Request, res: Response) {
    const { userId } = req

    await DeleteAllRevenuesService.execute(userId)

    return res.status(200).json({ message: 'All Revenues Delete' })
  }
}

export { DeleteAllRevenuesController }
