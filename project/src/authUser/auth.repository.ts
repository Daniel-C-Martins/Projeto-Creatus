import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthRepository {
   constructor(private readonly jwtService: JwtService) { }

   async signIn(users: any) {
      const payload = { email: users.email, sub: users.id }
      return {
         access_token: this.jwtService.sign(payload),
      };
   }
}
