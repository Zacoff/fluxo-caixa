import { allowList } from '../../../database/index'
import { promisify } from 'util'

const existAsync = promisify(allowList.exists).bind(allowList)

class ExistsAllowService {
  static async execute (token : string) {
    const result = await existAsync(token, '')

    return result
  }
}

export { ExistsAllowService }
