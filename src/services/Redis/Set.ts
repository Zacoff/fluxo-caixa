import { clientRedis } from '../../database'
import { verify } from 'jsonwebtoken'

interface IPayload {
  exp: number;
}

class SetRedisService {
  static async execute (token : string) {
    const { exp } = verify(token, '347c23ec4b1fa8480bf525753168f4a82466af8d') as IPayload

    clientRedis.set(token, '')
    clientRedis.expireat(token, exp)
  }
}

export { SetRedisService }
