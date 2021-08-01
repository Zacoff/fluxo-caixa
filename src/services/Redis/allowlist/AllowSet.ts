import { allowList } from '../../../database/index'

interface ITokens{
  chave: string,
  value: string,
  exp: number
}
class SetAllowService {
  static async execute ({ chave, value, exp } : ITokens) {
    allowList.set(chave, value)
    allowList.expireat(chave, exp)
  }
}

export { SetAllowService }
