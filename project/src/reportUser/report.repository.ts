import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { UserData } from '../interface/user';
import { customError } from 'src/utils/erros';

const prisma = new PrismaClient()

@Injectable()
export class ReportRepository {
   async report() {

   }
}
