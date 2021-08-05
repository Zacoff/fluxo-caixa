import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../../repository/Users'

interface IAuthenticate {
  email: string;
}

class CreateAccessToken {
  static async execute ({ email } : IAuthenticate) {
    const userRepository = getCustomRepository(UsersRepositories)

    const user = await userRepository.findOne({ where: { email } })

    if (!user) throw new Error('User not exists')

    const token = sign(
      { user: user.email },
      '347c23ec4b1fa8480bf525753168f4a82466af8d',
      {
        subject: user.id,
        expiresIn: '5d'
      })

    return token
  }
}

export { CreateAccessToken }
