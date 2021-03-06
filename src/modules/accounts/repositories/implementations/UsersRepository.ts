import { getRepository, Repository } from "typeorm"; // Tem que ser importado ates da entidade, senão dá erro
import { User } from "../../entities/User"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({ name, driver_license, email, password, avatar, id }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      driver_license,
      email,
      password,
      avatar,
      id
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({email})
    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id)
    return user
  }
}

export { UsersRepository }