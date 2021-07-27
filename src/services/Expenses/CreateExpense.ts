import { getCustomRepository } from 'typeorm';
import { ExpensesRepositories } from '../../repository/Expenses';

interface IExpense {
  description: string;
  value: number;
  createdAt: string;
}

class CreateExpense {
  static async execute({description , value , createdAt} : IExpense){
    const expensesRepository = getCustomRepository(ExpensesRepositories);

    const expenseCreate = expensesRepository.create({description , value , createdAt});

    await expensesRepository.save(expenseCreate);

    return expenseCreate;
  } 
}

export { CreateExpense }