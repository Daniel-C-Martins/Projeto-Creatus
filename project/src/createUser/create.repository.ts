import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { User } from '../interface/user';
import { customError } from 'src/utils/erros';

const prisma = new PrismaClient()

@Injectable()
export class CreateRepository {
   async createUser(user: User, hash: any) {
      try {
         const userCreated = await prisma.user.create(
            {
               data:
               {
                  id: user.id,
                  name: user.name,
                  level: user.level,
                  email: user.email,
                  password: hash
               }
            }
         );
         return userCreated;
      } catch (e) {
         customError("Informações insuficientes para a criação do usuário", HttpStatus.BAD_REQUEST);
      }
   }
}
