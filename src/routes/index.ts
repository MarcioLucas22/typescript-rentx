import { Router } from 'express'
import { authenticateRoutes } from './authenticate.routes'
import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './specifications.routes'
import { usersRoutes } from './users.routes'

const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationsRoutes)
router.use('/users', usersRoutes)
// É feito dessa forma sem informar a rota, quando vc quer q fique apenas a "barra", sem nenhuma rota
// router.use("/", authenticateRoutes)
router.use(authenticateRoutes)

export { router }