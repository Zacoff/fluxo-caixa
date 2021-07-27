import { getCustomRepository } from 'typeorm';
import { ExpensesRepositories } from '../../repository/Expenses';

interface IDeleteExpense {
  id: number;
  description: string;
  value: number;
}

class DeleteExpense {
  static async execute({id , description, value} : IDeleteExpense){
    const expenseRepository = getCustomRepository(ExpensesRepositories);

    const expense = await expenseRepository.findOne({where: { id, description, value }});

    if(!expense) throw new Error(`Expense not found`);

    const idExpense = expense.id;

    await expenseRepository.delete(idExpense);
    
    return expense;
  }
}

export { DeleteExpense }