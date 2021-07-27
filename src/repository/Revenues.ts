import { EntityRepository, Repository } from "typeorm";
import { Revenues } from "../entity/Revenues";

@EntityRepository(Revenues)

class RevenuesRepositories extends Repository<Revenues>{}

export { RevenuesRepositories };