import { EntityRepository, Repository } from "typeorm";
import { Expenses } from "../entity/Expenses";

@EntityRepository(Expenses)

class ExpensesRepositories extends Repository<Expenses>{}

export { ExpensesRepositories };