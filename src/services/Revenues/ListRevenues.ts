import { getCustomRepository } from "typeorm";
import { RevenuesRepositories } from '../../repository/Revenues';


class ListRevenuesService{
    static async execute(userId : string) {
      const revenuesRepository = getCustomRepository(RevenuesRepositories);

      const revenuesUser = await revenuesRepository.find({ where: { userId: userId } })

      if (revenuesUser.length === 0) throw new Error(`Revenues empty`);

      return revenuesUser;
    }
}

export { ListRevenuesService }