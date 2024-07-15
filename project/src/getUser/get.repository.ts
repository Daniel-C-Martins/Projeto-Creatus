import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { customError } from 'src/utils/erros';

const prisma = new PrismaClient()

@Injectable()
export class GetRepository {
   async getUser(id: string) {
      try {
         const user = await prisma.user.findMany({
            where: {
               id: id
            }
         }
         );
         return user;
      } catch (e) {
         throw customError("Usuário não encontrado", HttpStatus.BAD_REQUEST);
      }
   }

   async getAllUser() {
      const user = await prisma.user.findMany({
         select: {
            id: true,
            name: true,
            email: true,
            password: true,
            level: true
         }
      });
      if (user.length === 0) {
         throw customError("Banco de dados vazio", HttpStatus.NOT_FOUND);
      }
      return user;
   }

   async getEmail(email: string) {
      const user = await prisma.user.findFirst({
         where: {
            email: email
         }, select: {
            email: true,
            password: true,
            name: true,
            id: true,
            level: true
         }
      });
      if (user === null) {
         throw customError("Email inválido", HttpStatus.BAD_REQUEST);
      }
      return user;
   }
}
