import { Injectable } from '@nestjs/common';
import { DelRepository } from './del.repository';

const delRepository = new DelRepository();

@Injectable()
export class DelService {
   delUser(id: string) {
      return delRepository.delUser(id);
   }
}
