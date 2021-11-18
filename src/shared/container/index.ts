import { container } from 'tsyringe'
import { SpecificationRepository } from '@modules/cars/repositories/implementations/SpecificationRepository'
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository'
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository'

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository", 
  CategoriesRepository
)

// ISpecificationRepository
container.registerSingleton<ISpecificationsRepository>(
  "SpecificationRepository", 
  SpecificationRepository
)

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)