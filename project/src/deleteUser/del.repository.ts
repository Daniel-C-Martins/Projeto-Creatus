import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { customError } from 'src/utils/erros';

const prisma = new PrismaClient()

@Injectable()
export class DelRepository {
   async delUser(id: string) {
      try {
         const user = await prisma.user.delete({
            where: {
               id: id
            }
         }
         );
         return user;
      } catch (e) {
         throw customError("Usuãrio não encontrado", HttpStatus.BAD_REQUEST);
      }
   }
}
