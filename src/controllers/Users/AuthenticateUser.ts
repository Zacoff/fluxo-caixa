import { Request, Response } from 'express'
import { AuthenticateUserService } from '../../services/Users/AuthenticateUser'

class AuthenticateUserController {
  static async handle (req: Request, res: Response) {
    const { email, password } = req.body

    const token = await AuthenticateUserService.execute({ email, password })

    return res.status(200).json(token)
  }
}

export { AuthenticateUserController }
