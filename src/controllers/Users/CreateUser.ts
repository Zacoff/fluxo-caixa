import { classToPlain } from 'class-transformer'
import { Request, Response } from 'express'
import { CreateUserService } from '../../services/Users/CreateUser'
class CreateUserController {
  static async handle (req: Request, res: Response) {
    const { name, email, password, admin } = req.body

    const user = await CreateUserService.execute({ name, email, password, admin })

    const userSend = classToPlain(user)

    res.status(201).json(userSend)
  }
}

export { CreateUserController }
