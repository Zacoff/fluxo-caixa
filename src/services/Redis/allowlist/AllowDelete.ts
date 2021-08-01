import { allowList } from '../../../database'
import { promisify } from 'util'

const delAsync = promisify(allowList.del).bind(allowList)

class DeleteAllowService {
  static async execute (chave : string) {
    await delAsync(chave)
  }
}

export { DeleteAllowService }
