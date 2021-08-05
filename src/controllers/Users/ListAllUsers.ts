import { Request, Response } from 'express'
import { ListAllUsersService } from '../../services/Users/ListAllUsers'

class ListUsersController {
  static async handle (req: Request, res: Response) {
    const users = await ListAllUsersService.execute()

    return res.status(200).json(users)
  }
}

export { ListUsersController }
