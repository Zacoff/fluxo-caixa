import { getCustomRepository } from "typeorm";
import { ExpensesRepositories } from '../../repository/Expenses';


class ListExpensesService{
    static async execute() {
        const expensesRepository = getCustomRepository(ExpensesRepositories);

        const expenses = await expensesRepository.find();

        return expenses;
    }
}

export { ListExpensesService }