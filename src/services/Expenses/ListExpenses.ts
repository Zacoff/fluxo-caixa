import { getCustomRepository } from "typeorm";
import { ExpensesRepositories } from '../../repository/Expenses';


class ListExpensesService{
    static async execute(userId : string) {
        const expensesRepository = getCustomRepository(ExpensesRepositories);

        const expensesUsers = await expensesRepository.find({ where: { userId: userId } });

        if (expensesUsers.length === 0) throw new Error(`Expenses empty`);

        return expensesUsers;
    }
}

export { ListExpensesService }