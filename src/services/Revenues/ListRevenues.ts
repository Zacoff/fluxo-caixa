import { getCustomRepository } from "typeorm";
import { RevenuesRepositories } from '../../repository/Revenues';


class ListRevenuesService{
    static async execute() {
        const revenuesRepositories = getCustomRepository(RevenuesRepositories);

        const revenues = await revenuesRepositories.find();

        return revenues;
    }
}

export { ListRevenuesService }