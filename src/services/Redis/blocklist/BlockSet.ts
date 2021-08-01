import { allowList } from '../../../database/index'

interface ITokens{
  chave: string,
  value?: string,
  exp?: number
}
class SetBlockService {
  static async execute ({ chave, value, exp } : ITokens) {
    allowList.set(chave, value)

    if (exp) allowList.expireat(chave, exp)
  }
}

export { SetBlockService }
