import { EntityRepository, Repository } from 'typeorm'
import { Users } from '../entity/Users'

@EntityRepository(Users)

class UsersRepositories extends Repository<Users> {}

export { UsersRepositories }
