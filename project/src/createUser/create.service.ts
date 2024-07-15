import { Injectable } from '@nestjs/common';
import { User } from '../interface/user';
import { CreateRepository } from './create.repository';
import * as bcrypt from 'bcrypt';

const createRepository = new CreateRepository();

@Injectable()
export class CreateService {
  async createUser(user: User) {

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);

    return createRepository.createUser(user, hash)
  }
}
