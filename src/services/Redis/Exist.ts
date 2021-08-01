import { clientRedis } from '../../database'
import { promisify } from 'util'

const existAsync = promisify(clientRedis.exists).bind(clientRedis)
class ExistsRedisService {
  static async execute (token) {
    const result = await existAsync(token, '')

    return result
  }
}

export { ExistsRedisService }
