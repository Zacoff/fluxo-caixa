import { Router } from 'express'
import { ListUsersController } from '../../controllers/Users/ListUsers'
import { CreateUserController } from '../../controllers/Users/CreateUser'
import { DeleteUserController } from '../../controllers/Users/DeleteUser'
import { AuthenticateUserController } from '../../controllers/Users/AuthenticateUser'
import { ensureAuthenticate } from '../../middlewares/ensureAuthenticate'
import { LogoutController } from '../../controllers/Users/Logout'
import { ensureBlocklist } from '../../middlewares/ensureBlocklist'
const router = Router()

router
  .post('/login', AuthenticateUserController.handle)
  .post('/logout', ensureAuthenticate.handle, LogoutController.handle)
  .get('/list/users', [ensureAuthenticate.handle, ensureBlocklist.handle], ListUsersController.handle)
  .post('/create/user', CreateUserController.handle)
  .delete('/delete/user', ensureAuthenticate.handle, DeleteUserController.handle)

export { router }
