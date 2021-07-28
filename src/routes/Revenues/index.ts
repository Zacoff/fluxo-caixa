import {Router} from "express";
import { CreateRevenuesController } from "../../controllers/Revenues/CreateRevenue";
import { DeleteRevenueController } from "../../controllers/Revenues/DeleteRevenue";
import { DeleteAllRevenuesController } from "../../controllers/Revenues/DeleteAllRevenues";
import { ListRevenuesController } from "../../controllers/Revenues/ListRevenues";

const router = Router();

router
.get('/list/revenues', ListRevenuesController.handle)
.post('/create/revenues', CreateRevenuesController.handle)
.delete('/delete/revenue', DeleteRevenueController.handle)
.delete('/delete/allRevenues', DeleteAllRevenuesController.handle)

export {router}