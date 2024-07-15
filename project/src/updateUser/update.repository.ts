import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { UserData } from '../interface/user';
import { customError } from 'src/utils/erros';

const prisma = new PrismaClient()

@Injectable()
export class UpdateRepository {

   async updateUser(id: string, userData: UserData, hash: any) {
      try {
         const user = await prisma.user.update({
            where: { id: id },
            data: {
               email: userData.email,
               name: userData.name,
               level: userData.level,
               password: hash
            }
         });
         return user;
      } catch (e) {
         customError("Usuário não encontrado || Informações insuficientes para alterar o usuário", HttpStatus.BAD_REQUEST);
      }
   }
}
