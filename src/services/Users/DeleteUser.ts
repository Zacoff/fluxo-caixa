import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../../repository/Users'
import { compare } from 'bcrypt'

interface IDeleteUser {
  email: string;
  password: string;
}

class DeleteUserService {
  static async execute ({ email, password } : IDeleteUser) {
    const userRepository = getCustomRepository(UsersRepositories)

    const user = await userRepository.findOne({ where: { email } })

    if (!user) throw new Error('User not found')

    const { id, password: passwordHash } = user

    if (await compare(password, passwordHash) === false) throw new Error('Invalid Password')

    await userRepository.delete(id)

    return user
  }
}

export { DeleteUserService }
