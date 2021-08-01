import { getCustomRepository } from 'typeorm'
import { RevenuesRepositories } from '../../repository/Revenues'

interface IRevenues {
  userId: string;
  description: string;
  value: number;
  createdAt: string;
}

class CreateRevenueService {
  static async execute ({ userId, description, value, createdAt } : IRevenues) {
    const revenuesRepository = getCustomRepository(RevenuesRepositories)

    const revenueCreate = revenuesRepository.create({ userId, description, value, createdAt })

    await revenuesRepository.save(revenueCreate)

    return revenueCreate
  }
}

export { CreateRevenueService }
