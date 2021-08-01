import { getCustomRepository } from 'typeorm'
import { ExpensesRepositories } from '../../repository/Expenses'

interface IExpense {
  userId: string;
  description: string;
  value: number;
  createdAt: string;
}

class CreateExpenseService {
  static async execute ({ userId, description, value, createdAt } : IExpense) {
    const expensesRepository = getCustomRepository(ExpensesRepositories)

    const expenseCreate = expensesRepository.create({ userId, description, value, createdAt })

    await expensesRepository.save(expenseCreate)

    return expenseCreate
  }
}

export { CreateExpenseService }
