import { Request, Response } from 'express'
import { ExistsAllowService } from '../../services/Redis/allowlist/AllowExist'

import { CreateAccessToken } from '../../services/Tokens/CreateAcessToken'
import { CreateTokenRefreshService } from '../../services/Tokens/CreateRefreshToken'
import { DeleteAllowService } from '../../services/Redis/allowlist/AllowDelete'

import { verify } from 'jsonwebtoken'

interface IPayload {
  user: string;
}
class TokenRefresh {
  static async handle (req: Request, res: Response) {
    const { refreshToken } = req.body

    const [, token] = req.headers.authorization.split(' ')

    const existAllow = await ExistsAllowService.execute(refreshToken)

    if (existAllow === 0) throw new Error('Ivalid Refresh Token')

    const { user } = verify(token, '347c23ec4b1fa8480bf525753168f4a82466af8d') as IPayload

    await DeleteAllowService.execute(refreshToken)

    const accessToken = await CreateAccessToken.execute({ email: user })

    const newRefreshToken = await CreateTokenRefreshService.execute()

    res.status(200).set('Authorization', accessToken).json({ refreshToken: newRefreshToken }).end()
  }
}

export { TokenRefresh }
