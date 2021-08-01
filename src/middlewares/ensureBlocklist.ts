import { Request, Response, NextFunction } from 'express'
import { ExistsRedisService } from '../services/Redis/Exist'

class ensureBlocklist {
  static async handle (req: Request, res: Response, next: NextFunction) {
    const [, token] = req.headers.authorization.split(' ')

    const exist = await ExistsRedisService.execute(token)

    if (exist) throw new Error('Invalid token for logout')

    return next()
  }
}

export { ensureBlocklist }
