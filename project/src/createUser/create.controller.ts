import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { User } from '../interface/user';
import { CreateService } from './create.service';

@Controller('users')
export class CreateController {
  constructor(private readonly createService: CreateService) { }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createUser(@Body() user: User) {
    return this.createService.createUser(user);
  }
}
