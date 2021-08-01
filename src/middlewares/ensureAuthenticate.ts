import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}

class ensureAuthenticate {
  static async handle (req: Request, res: Response, next: NextFunction) {
    const [, token] = req.headers.authorization.split(' ')

    const { sub } = verify(token, '347c23ec4b1fa8480bf525753168f4a82466af8d') as IPayload

    req.userId = sub

    req.token = token

    return next()
  }
}

export { ensureAuthenticate }
