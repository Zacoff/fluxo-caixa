import { getCustomRepository } from 'typeorm'
import { RevenuesRepositories } from '../../repository/Revenues'

class DeleteAllRevenuesService {
  static async execute (userId : string) {
    const revenuesRepository = getCustomRepository(RevenuesRepositories)

    const revenuesUser = await revenuesRepository.find({ where: { userId: userId } })

    if (revenuesUser.length === 0) throw new Error('Revenues not found')

    const revenuesToDelete : Array<string> = []

    revenuesUser.map(item => revenuesToDelete.push(item.id))

    await revenuesRepository.delete(revenuesToDelete)

    return revenuesUser
  }
}

export { DeleteAllRevenuesService }
