import { Request, Response } from 'express'
import { SetBlockService } from '../../services/Redis/blocklist/BlockSet'
class LogoutController {
  static async handle (req: Request, res: Response) {
    const { token } = req

    await SetBlockService.execute({ chave: token })

    return res.status(200).end()
  }
}

export { LogoutController }
