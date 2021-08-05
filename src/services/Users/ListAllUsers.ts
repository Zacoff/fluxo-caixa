import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../../repository/Users'

class ListAllUsersService {
  static async execute () {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const users = await usersRepositories.find()

    return users
  }
}

export { ListAllUsersService }
