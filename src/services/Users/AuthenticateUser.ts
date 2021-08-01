import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../../repository/Users'

interface IAuthenticate {
  email: string;
  password: string;
}

class AuthenticateUserService {
  static async execute ({ email, password } : IAuthenticate) {
    const userRepository = getCustomRepository(UsersRepositories)

    const user = await userRepository.findOne({ where: { email } })

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) throw new Error('Invalid Password or Email')

    const token = sign(
      { user: user.email },
      '347c23ec4b1fa8480bf525753168f4a82466af8d',
      {
        subject: user.id,
        expiresIn: '15m'
      })

    return token
  }
}

export { AuthenticateUserService }
