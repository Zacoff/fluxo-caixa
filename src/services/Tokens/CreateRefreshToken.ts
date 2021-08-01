import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../../repository/Users'
import { hash } from 'bcrypt'

class CreateTokenRefreshService {
  static async execute (userId : string) {
    const userRepository = getCustomRepository(UsersRepositories)

    const user = await userRepository.findOne({ where: { id: userId } })

    const token = sign(
      { user: user.email },
      '347c23ec4b1fa8480bf525753168f4a82466af8d',
      {
        subject: user.id,
        expiresIn: '5d'
      })

    const tokenHash = hash(token, 8)

    return { token, tokenHash }
  }
}

export { CreateTokenRefreshService }
