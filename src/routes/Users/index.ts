import {Router} from "express";
import { ListUsersController } from "../../controllers/Users/ListUsers";
import { CreateUserController } from '../../controllers/Users/CreateUser'
const router = Router();

router
.get('/list/users', ListUsersController.handle)
.post('/create/user', CreateUserController.handle)

export {router}