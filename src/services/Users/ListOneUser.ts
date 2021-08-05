import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../../repository/Users'

class ListOneUserService {
  static async execute (userId : string) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const users = await usersRepositories.find({ where: { id: userId } })

    return users
  }
}

export { ListOneUserService }
