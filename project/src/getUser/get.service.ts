import { Injectable } from '@nestjs/common';
import { GetRepository } from './get.repository';

const getRepository = new GetRepository();

@Injectable()
export class GetService {
  getUser(id: string) {
    return getRepository.getUser(id);
  }

  getAllUser() {
    return getRepository.getAllUser();
  }

  getEmail(email: string) {
    return getRepository.getEmail(email);
  }
}
