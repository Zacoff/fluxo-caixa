import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../../repository/Users';
import { hash } from 'bcrypt';

interface IUser{
  name: string;
  email: string;
  password: string;
}

class CreateUser{
  static async execute({name, email, password} : IUser){
    const userRepository = getCustomRepository(UsersRepositories);

    const passwordHash = await hash(password , 8);

    const userCreate = userRepository.create({name, email, password});

    await userRepository.save(userCreate);

    return userCreate;
  }
}