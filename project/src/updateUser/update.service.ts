import { Injectable } from '@nestjs/common';
import { UpdateRepository } from './update.repository';
import { UserData } from '../interface/user';
import * as bcrypt from 'bcrypt';

const updateRepository = new UpdateRepository();

@Injectable()
export class UpdateService {
   async updateUser(id: string, userData: UserData) {

      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(userData.password, salt);

      return updateRepository.updateUser(id, userData, hash);
   }
}
