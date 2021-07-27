import {Router} from "express";
import { CreateUserController } from '../../controllers/Users/CreateUser'
const router = Router();

router
//.get('/list/users', ListRevenuesController.handle)
.post('/create/user', CreateUserController.handle)

export {router}