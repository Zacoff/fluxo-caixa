import { randomBytes } from 'crypto'
import { SetAllowService } from '../Redis/allowlist/AllowSet'
import moment from 'moment'
class CreateTokenRefreshService {
  static async execute () {
    const refreshToken = randomBytes(24).toString('hex')
    const exp = moment().add(5, 'd').unix()

    await SetAllowService.execute({ chave: refreshToken, value: '', exp })

    return refreshToken
  }
}

export { CreateTokenRefreshService }
