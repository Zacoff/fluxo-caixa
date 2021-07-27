import { getCustomRepository } from 'typeorm';
import { ExpensesRepositories } from '../../repository/Expenses';

class DeleteExpenses {
  static async execute( expensesArray : Array<number> ){
    const expensesRepository = getCustomRepository(ExpensesRepositories);

    const deleteExpenses = [];

    for(let i = 0; i < expensesArray.length; i++) {
      const expenses = expensesRepository.findOne(expensesArray[i]);
      deleteExpenses.push(expenses); 
    }

    await expensesRepository.delete(expensesArray);

    return deleteExpenses;
  }
}

export { DeleteExpenses }