import { getCustomRepository } from 'typeorm'
import { RevenuesRepositories } from '../../repository/Revenues'

interface IDeleteRevenue {
  userId: string;
  description: string;
  value: number;
}

class DeleteRevenueService {
  static async execute ({ userId, description, value } : IDeleteRevenue) {
    const revenueRepository = getCustomRepository(RevenuesRepositories)

    const revenue = await revenueRepository.findOne({ where: { userId, description, value } })

    if (!revenue) throw new Error('Revenue not found')

    const idrevenue = revenue.id

    await revenueRepository.delete(idrevenue)

    return revenue
  }
}

export { DeleteRevenueService }
