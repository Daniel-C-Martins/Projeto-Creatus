import {
   Request,
   Controller,
   Post,
   HttpCode,
   HttpStatus,
   UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserToken } from 'src/interface/user';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('login')
export class AuthController {
   constructor(private readonly authService: AuthService) { }

   @UseGuards(LocalAuthGuard)
   @HttpCode(HttpStatus.OK)
   @Post()
   async signIn(@Request() req: UserToken) {
      return this.authService.signIn(req);
   }
}
