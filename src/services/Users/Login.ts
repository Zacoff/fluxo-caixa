import { compare } from 'bcrypt'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../../repository/Users'
import { CreateAccessToken } from '../Tokens/CreateAcessToken'

interface ILogin {
  email: string;
  password: string;
}

class LoginUserService {
  static async execute ({ email, password } : ILogin) {
    const userRepository = getCustomRepository(UsersRepositories)

    const user = await userRepository.findOne({ where: { email } })

    if (!user) throw new Error('Invalid Password or Email')

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) throw new Error('Invalid Password or Email')

    return CreateAccessToken.execute({ email })
  }
}

export { LoginUserService }
