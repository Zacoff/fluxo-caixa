import { Router } from 'express'
import { TokenRefresh } from '../../controllers/tokens/TokenRefresh'

import { ensureBlocklist } from '../../middlewares/ensureTokenLogout'

const router = Router()

router
  .get('/refreshToken', ensureBlocklist.handle, TokenRefresh.handle)

export { router }
