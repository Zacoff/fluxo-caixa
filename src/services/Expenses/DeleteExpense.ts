import { getCustomRepository } from 'typeorm'
import { ExpensesRepositories } from '../../repository/Expenses'

interface IDeleteExpense {
  userId: string;
  description: string;
  value: number;
}

class DeleteExpenseService {
  static async execute ({ userId, description, value } : IDeleteExpense) {
    const expenseRepository = getCustomRepository(ExpensesRepositories)

    const expense = await expenseRepository.findOne({ where: { userId, description, value } })

    if (!expense) throw new Error('Expense not found')

    const idExpense = expense.id

    await expenseRepository.delete(idExpense)
  }
}

export { DeleteExpenseService }
