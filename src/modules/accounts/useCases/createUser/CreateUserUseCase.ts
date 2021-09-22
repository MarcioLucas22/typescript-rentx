import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { hash } from 'bcryptjs'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {} 

  async execute({ driver_license, email, name, password }: ICreateUserDTO): Promise<void> {

    const userAlreadyexists = await this.usersRepository.findByEmail(email)

    if(userAlreadyexists) {
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8)

    await this.usersRepository.create({
      name, 
      email, 
      password: passwordHash,
      driver_license
    })
  }
}

export { CreateUserUseCase }