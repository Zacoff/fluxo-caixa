import { allowList } from '../../../database'
import { promisify } from 'util'

const delAsync = promisify(allowList.del).bind(allowList)

class DeleteBlockService {
  static async execute (chave : string) {
    await delAsync(chave)
  }
}

export { DeleteBlockService }
