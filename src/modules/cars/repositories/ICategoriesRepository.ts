import { Category } from "../model/Category";

// DTO -> Data Transfer Object
interface ICreateCategoryDTO {
  name: String
  description: String
} 

interface ICategoriesRepository {
  findByName(name: String): Category
  list(): Category[]
  create({ name, description }: ICreateCategoryDTO): void
}

export { ICategoriesRepository, ICreateCategoryDTO }