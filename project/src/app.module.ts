import { Module } from '@nestjs/common';
import { GetModule } from './getUser/get.module';
import { CreateModule } from './createUser/create.module';
import { DelModule } from './deleteUser/del.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UpdateModule } from './updateUser/update.module';
import { AuthModule } from './authUser/auth.module';

@Module({
  imports: [GetModule, CreateModule, DelModule, PrismaModule, UpdateModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


