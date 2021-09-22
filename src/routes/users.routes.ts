import { Router } from 'express'
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'

const usersRoutes = Router()

const createUserUseCase = new CreateUserController()

usersRoutes.post('/', createUserUseCase.handle)

export { usersRoutes }

