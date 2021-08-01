import { allowList } from '../../../database/index'
import { promisify } from 'util'

const existAsync = promisify(allowList.exists).bind(allowList)

class ExistsBLockService {
  static async execute (token : string) {
    const result = await existAsync(token, '')

    return result
  }
}

export { ExistsBLockService }
