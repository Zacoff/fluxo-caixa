import { Request, Response } from 'express'
import { SetRedisService } from '../../services/Redis/Set'

class LogoutController {
  static async handle (req: Request, res: Response) {
    const { token } = req
    const users = await SetRedisService.execute(token)

    return res.status(200).json(users)
  }
}

export { LogoutController }
