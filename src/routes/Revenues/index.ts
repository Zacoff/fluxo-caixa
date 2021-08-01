import { Router } from 'express'
import { CreateRevenuesController } from '../../controllers/Revenues/CreateRevenue'
import { DeleteRevenueController } from '../../controllers/Revenues/DeleteRevenue'
import { DeleteAllRevenuesController } from '../../controllers/Revenues/DeleteAllRevenues'
import { ListRevenuesController } from '../../controllers/Revenues/ListRevenues'
import { ensureAuthenticate } from '../../middlewares/ensureAuthenticate'

const router = Router()

router
  .get('/list/revenues', ensureAuthenticate.handle, ListRevenuesController.handle)
  .post('/create/revenues', ensureAuthenticate.handle, CreateRevenuesController.handle)
  .delete('/delete/revenue', ensureAuthenticate.handle, DeleteRevenueController.handle)
  .delete('/delete/allRevenues', ensureAuthenticate.handle, DeleteAllRevenuesController.handle)

export { router }
