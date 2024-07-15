import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { UserToken } from 'src/interface/user';
import { GetService } from 'src/getUser/get.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
   constructor(
      private readonly getService: GetService,
      private readonly authRepository: AuthRepository,
   ) { }

   async validateUser(email: string, password: string) {
      const user = await this.getService.getEmail(email);
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
         const { password, ...result } = user;
         return result;
      }
      return null;
   }

   async signIn(userToken: UserToken) {
      return this.authRepository.signIn(userToken);
   }
}
