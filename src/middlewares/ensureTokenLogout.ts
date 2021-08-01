import { Request, Response, NextFunction } from 'express'
import { DeleteAllowService } from '../services/Redis/allowlist/AllowDelete'
import { ExistsBLockService } from '../services/Redis/blocklist/BlockExist'

class ensureBlocklist {
  static async handle (req: Request, res: Response, next: NextFunction) {
    const [, token] = req.headers.authorization.split(' ')

    const existBlock = await ExistsBLockService.execute(token)

    await DeleteAllowService.execute(token)

    if (existBlock === 1) throw new Error('Invalid Token for Logout')

    return next()
  }
}

export { ensureBlocklist }
