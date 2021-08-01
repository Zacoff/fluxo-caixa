import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../../repository/Users'
import { hash } from 'bcrypt'
import { EmailAlreadyExists } from '../../errors/EmailAlreadyExists'

interface IUser{
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

class CreateUserService {
  static async execute ({ name, email, password, admin = false } : IUser) {
    const userRepository = getCustomRepository(UsersRepositories)

    const userAlreadyExists = await userRepository.findOne({ where: { email } })

    if (userAlreadyExists) throw new EmailAlreadyExists()

    const passwordHash = await hash(password, 8)

    const userCreate = userRepository.create({ name, email, password: passwordHash, admin })

    await userRepository.save(userCreate)

    return userCreate
  }
}

export { CreateUserService }
