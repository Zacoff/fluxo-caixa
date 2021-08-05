import { Router } from 'express'
import { ListUsersController } from '../../controllers/Users/ListAllUsers'
import { CreateUserController } from '../../controllers/Users/CreateUser'
import { DeleteUserController } from '../../controllers/Users/DeleteUser'
import { LoginUserController } from '../../controllers/Users/Login'
import { ensureAuthenticate } from '../../middlewares/ensureAuthenticate'
import { LogoutController } from '../../controllers/Users/Logout'
import { ensureBlocklist } from '../../middlewares/ensureTokenLogout'
import { ListOneUserController } from '../../controllers/Users/LisOneUser'
const router = Router()

router
  .post('/login', LoginUserController.handle)
  .post('/logout', ensureAuthenticate.handle, LogoutController.handle)
  .get('/list/user', [ensureAuthenticate.handle, ensureBlocklist.handle], ListOneUserController.handle)
  .get('/list/users', [ensureAuthenticate.handle, ensureBlocklist.handle], ListUsersController.handle)
  .post('/create/user', CreateUserController.handle)
  .delete('/delete/user', [ensureAuthenticate.handle, ensureBlocklist.handle], DeleteUserController.handle)

export { router }
