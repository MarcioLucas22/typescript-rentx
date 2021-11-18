import { Router } from 'express'
import multer from 'multer'
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import uploadConfig from '../config/upload'

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserUseCase = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRoutes.use(ensureAuthenticated)
usersRoutes.post('/', createUserUseCase.handle)
usersRoutes.patch('/avatar', uploadAvatar.single("avatar"), updateUserAvatarController.handle)

export { usersRoutes }

