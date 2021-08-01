import { Router } from 'express'
import { CreateRevenuesController } from '../../controllers/Revenues/CreateRevenue'
import { DeleteRevenueController } from '../../controllers/Revenues/DeleteRevenue'
import { DeleteAllRevenuesController } from '../../controllers/Revenues/DeleteAllRevenues'
import { ListRevenuesController } from '../../controllers/Revenues/ListRevenues'
import { ensureAuthenticate } from '../../middlewares/ensureAuthenticate'
import { ensureBlocklist } from '../../middlewares/ensureTokenLogout'

const router = Router()

router
  .get('/list/revenues', [ensureAuthenticate.handle, ensureBlocklist.handle], ListRevenuesController.handle)
  .post('/create/revenues', [ensureAuthenticate.handle, ensureBlocklist.handle], CreateRevenuesController.handle)
  .delete('/delete/revenue', [ensureAuthenticate.handle, ensureBlocklist.handle], DeleteRevenueController.handle)
  .delete('/delete/allRevenues', [ensureAuthenticate.handle, ensureBlocklist.handle], DeleteAllRevenuesController.handle)

export { router }
