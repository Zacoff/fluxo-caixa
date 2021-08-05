import { Request, Response } from 'express'
import { CreateTokenRefreshService } from '../../services/Tokens/CreateRefreshToken'
import { LoginUserService } from '../../services/Users/Login'

class LoginUserController {
  static async handle (req: Request, res: Response) {
    const { email, password } = req.body

    const accessToken = await LoginUserService.execute({ email, password })

    const refreshToken = await CreateTokenRefreshService.execute()

    return res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken })
  }
}

export { LoginUserController }
