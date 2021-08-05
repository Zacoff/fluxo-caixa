import { Request, Response } from 'express'
import { ListOneUserService } from '../../services/Users/ListOneUser'
import { classToPlain } from 'class-transformer'

class ListOneUserController {
  static async handle (req: Request, res: Response) {
    const userId = req.userId

    const user = await ListOneUserService.execute(userId)

    const userSend = classToPlain(user)

    return res.status(200).json(userSend)
  }
}

export { ListOneUserController }
