import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { HttpStatus, Injectable} from '@nestjs/common';
import { AuthService } from './auth.service';
import { customError } from 'src/utils/erros';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
   constructor(private authService: AuthService) {
      super({ usernameField: 'email' });
   }

   async validate(email: string, password: string) {
      const user = await this.authService.validateUser(email, password);
      if (!user) {
         customError("Senha inválida!", HttpStatus.BAD_REQUEST);
      }
      return user;
   }
}
