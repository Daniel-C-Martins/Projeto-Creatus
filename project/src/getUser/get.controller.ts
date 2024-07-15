import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { GetService } from './get.service';

@Controller('users')
export class GetController {
  constructor(private readonly getService: GetService) { }

  @HttpCode(HttpStatus.OK)
  @Get(":id")
  async getUser(@Param() params: any) {
    return this.getService.getUser(params.id);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async getAllUser() {
    return this.getService.getAllUser();
  }

  @Get()
  async getEmail(email: string) {
    return this.getService.getEmail(email);
  }
}
