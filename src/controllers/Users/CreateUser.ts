import { Request, Response } from 'express'
import { CreateUserService } from '../../services/Users/CreateUser'
class CreateUserController {
  static async handle (req: Request, res: Response) {
    const { name, email, password } = req.body

    const user = await CreateUserService.execute({ name, email, password })

    res.status(201).json(user)
  }
}

export { CreateUserController }
