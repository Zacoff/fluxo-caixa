import { Request, Response } from 'express'
import { DeleteUserService } from '../../services/Users/DeleteUser'

class DeleteUserController {
  static async handle (req: Request, res: Response) {
    const { email, password } = req.body

    const user = await DeleteUserService.execute({ email, password })

    return res.status(200).json(user)
  }
}

export { DeleteUserController }
