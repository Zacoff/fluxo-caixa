import { getCustomRepository } from 'typeorm';
import { ExpensesRepositories } from '../../repository/Expenses';

class DeleteAllExpensesService {
  static async execute( userId : string){
    const expensesRepository = getCustomRepository(ExpensesRepositories);

    const expensesUser = await expensesRepository.find({ where: { userId: userId } })

    if (expensesUser.length === 0) throw new Error(`Expenses not found`);
    
    const expensesToDelete : Array<string> = [];

    expensesUser.map(item => expensesToDelete.push(item.id));

    await expensesRepository.delete(expensesToDelete);
    
    return expensesUser;
  }
}

export { DeleteAllExpensesService }