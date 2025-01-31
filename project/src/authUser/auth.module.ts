import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GetModule } from 'src/getUser/get.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { AuthRepository } from './auth.repository';
import { GetService } from 'src/getUser/get.service';

@Module({
  imports: [
    GetModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' }
    }),
    PassportModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy, AuthRepository, GetService],
})
export class AuthModule { }
