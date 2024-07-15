import { Body, Controller, HttpCode, HttpStatus, Param, Put } from '@nestjs/common';
import { UpdateService } from './update.service';
import { UserData } from '../interface/user';

@Controller('users')
export class UpdateController {
   constructor(private readonly updateService: UpdateService) { }

   @HttpCode(HttpStatus.OK)
   @Put(':id')
   async updateUser(@Param() params: any, @Body() userData: UserData) {
      return await this.updateService.updateUser(params.id, userData);
   }
}
